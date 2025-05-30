import os
import cv2
import numpy as np
import pandas as pd
from tqdm import tqdm
from pathlib import Path
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class MelanomaPreprocessor:
    def __init__(self, output_dir: str):
        """
        Initialize the preprocessor.

        Args:
            output_dir (str): Directory to save processed images
        """
        self.output_dir = Path(output_dir)
        self.filtered_dir = self.output_dir / "filtered_images"
        self.augmented_dir = self.output_dir / "augmented_images"

        # Create output directories
        self.filtered_dir.mkdir(parents=True, exist_ok=True)
        self.augmented_dir.mkdir(parents=True, exist_ok=True)

    def apply_filters(self, image_path: str) -> np.ndarray:
        """
        Apply preprocessing filters to an image.

        Args:
            image_path (str): Path to the input image

        Returns:
            np.ndarray: Processed image
        """
        img = cv2.imread(image_path)
        if img is None:
            return None

        # Convert BGR to RGB
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Resize early for speed
        img = cv2.resize(img, (224, 224), interpolation=cv2.INTER_AREA)

        # Hair removal (create mask using grayscale)
        gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (15, 15))
        blackhat = cv2.morphologyEx(gray, cv2.MORPH_BLACKHAT, kernel)
        blackhat_blur = cv2.GaussianBlur(
            blackhat, (9, 9), cv2.BORDER_REPLICATE)
        _, mask = cv2.threshold(blackhat_blur, 50, 255,
                                cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        inpainted = cv2.inpaint(img, mask, 4, cv2.INPAINT_TELEA)

        # Denoising (apply to each channel)
        denoised = cv2.medianBlur(inpainted, 5)
        denoised = cv2.bilateralFilter(
            denoised, d=17, sigmaColor=100, sigmaSpace=100)

        # Contrast enhancement (apply CLAHE to each channel)
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        enhanced = np.zeros_like(denoised)
        for i in range(3):  # Apply to each RGB channel
            enhanced[:, :, i] = clahe.apply(denoised[:, :, i])

        # Convert back to BGR for saving
        return cv2.cvtColor(enhanced, cv2.COLOR_RGB2BGR)

    def rotate_image(self, img: np.ndarray, angle: float) -> np.ndarray:
        """Rotate image by given angle."""
        h, w = img.shape[:2]
        M = cv2.getRotationMatrix2D((w // 2, h // 2), angle, 1)
        abs_cos = abs(M[0, 0])
        abs_sin = abs(M[0, 1])

        new_w = int(h * abs_sin + w * abs_cos)
        new_h = int(h * abs_cos + w * abs_sin)

        M[0, 2] += (new_w - w) / 2
        M[1, 2] += (new_h - h) / 2

        return cv2.warpAffine(img, M, (new_w, new_h))

    def augment_image(self, img: np.ndarray) -> list:
        """Apply data augmentation to an image."""
        aug_images = []

        # Horizontal flip
        aug_images.append(cv2.flip(img, 1))

        # Rotations
        for angle in [15, -15]:
            aug_images.append(self.rotate_image(img, angle))

        # Gaussian noise
        noise = np.random.normal(0, 20, img.shape).astype(np.uint8)
        noisy_img = cv2.add(img, noise)
        aug_images.append(noisy_img)

        # Brightness adjustment
        bright_img = cv2.convertScaleAbs(img, alpha=1.2, beta=30)
        aug_images.append(bright_img)

        return aug_images

    def process_dataset(self, image_dir: str, labels_path: str, dataset_name: str):
        """
        Process a complete dataset (ISIC 2019 or 2020).
        For melanoma: filter, augment, and save all to augmented_images/.
        For non-melanoma: filter and copy to augmented_images/ (no augmentation).
        Label CSV: include all images in augmented_images/ (both classes).
        """
        logger.info(f"Processing {dataset_name} dataset...")

        # Load labels
        df = pd.read_csv(labels_path)

        # Handle different dataset formats
        if dataset_name == 'isic2019':
            image_col = 'image'
            mel_col = 'MEL'
        else:  # isic2020
            image_col = 'image_name'
            mel_col = 'target'

        records = []
        skipped_images = []

        for idx, row in tqdm(df.iterrows(), total=len(df)):
            image_id = row[image_col]
            mel_label = row[mel_col]
            image_path = os.path.join(image_dir, f"{image_id}.jpg")
            if not os.path.exists(image_path):
                image_path = os.path.join(image_dir, f"{image_id}.png")
            if not os.path.exists(image_path):
                logger.warning(f"Image not found: {image_path}")
                skipped_images.append(image_id)
                continue
            filtered_img = self.apply_filters(image_path)
            if filtered_img is None:
                skipped_images.append(image_id)
                continue
            # Save filtered image
            filtered_path = self.filtered_dir / f"{image_id}.png"
            cv2.imwrite(str(filtered_path), filtered_img)
            # Save to augmented_images (always save original)
            aug_path = self.augmented_dir / f"{image_id}.png"
            cv2.imwrite(str(aug_path), filtered_img)
            records.append((f"{image_id}.png", mel_label))
            # If melanoma, also save augmentations
            if mel_label == 1 or mel_label == 1.0:
                img_rgb = cv2.cvtColor(filtered_img, cv2.COLOR_BGR2RGB)
                aug_images = self.augment_image(img_rgb)
                for i, aug in enumerate(aug_images):
                    aug_name = f"{image_id}_aug{i}.png"
                    aug_path = self.augmented_dir / aug_name
                    cv2.imwrite(str(aug_path), cv2.cvtColor(
                        aug, cv2.COLOR_RGB2BGR))
                    records.append((aug_name, mel_label))
        # Save combined label CSV
        label_df = pd.DataFrame(records, columns=["image", "MEL"])
        label_df.to_csv(self.output_dir /
                        f"{dataset_name}_combined_labels.csv", index=False)
        logger.info(f"Processed {len(records)} images for {
                    dataset_name} (including augmentations)")
        if skipped_images:
            logger.warning(f"Skipped {len(skipped_images)} images")


def main():
    # Example usage
    preprocessor = MelanomaPreprocessor("src/data/processed")

    # Process ISIC 2019
    preprocessor.process_dataset(
        image_dir="src/data/raw/ISIC_2019",
        labels_path="src/data/raw/ISIC_2019_Training_GroundTruth.csv",
        dataset_name="isic2019"
    )

    # Process ISIC 2020 dataset
    preprocessor.process_dataset(
        image_dir="src/data/raw/ISIC_2020_Training_Input",
        labels_path="src/data/raw/ISIC_2020_Training_GroundTruth.csv",
        dataset_name="isic2020"
    )


if __name__ == "__main__":
    main()
