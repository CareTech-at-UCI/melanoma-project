from PIL import Image
import numpy as np
import cv2
import io

# ---------
# FILTERS
# ---------

# Hair removal
def remove_hair(img):
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT,(7,17))
    blackhat = cv2.morphologyEx(img, cv2.MORPH_BLACKHAT, kernel)
    bhg= cv2.GaussianBlur(blackhat,(3,3),cv2.BORDER_DEFAULT)
    ret,mask = cv2.threshold(bhg,10,255,cv2.THRESH_BINARY)
    dst = cv2.inpaint(img,mask,7,cv2.INPAINT_TELEA)
    return dst
    
# Gray scale
def convert_to_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    
# Noise reduction
def reduce_noise(image):
    bilateral = cv2.bilateralFilter(image, 9, 75, 75)
    median = cv2.medianBlur(bilateral, 5)
    return median
    
# Contrast enhancement
def enhance_contrast(image):
    enhanced_img = (cv2.createCLAHE(clipLimit=2, tileGridSize=(8,8))).apply(image)
    return enhanced_img

# Resizing
def resize_img(img, size=(224, 224)):
    resized_img = cv2.resize(img, size)
    return resized_img

# Edge detection
def segment_lesion(image):
    _, thresh = cv2.threshold(image, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
    
    kernel = np.ones((5,5), np.uint8)
    mask = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
    return mask

def enhance_borders(image):
    # Not used, might be used later
    sobelx = cv2.Sobel(image, cv2.CV_64F, 1, 0, ksize=3)
    sobely = cv2.Sobel(image, cv2.CV_64F, 0, 1, ksize=3)
    gradient = np.sqrt(sobelx**2 + sobely**2)
    
    gradient = np.uint8(gradient * 255 / gradient.max())
    return gradient


def preprocess_image(file: bytes) -> np.ndarray:
    # Read from bytes
    file_bytes = np.frombuffer(file, np.uint8)
    image = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR) 
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) 

    gray = convert_to_grayscale(image)
    hair_remove = remove_hair(gray)
    noise_reduced = reduce_noise(hair_remove)
    contrast = enhance_contrast(noise_reduced)
    edge_preserved = cv2.edgePreservingFilter(contrast, flags=1, sigma_s=7, sigma_r=0.10)

    resized = cv2.resize(edge_preserved, (224, 224))
    resized_rgb = np.stack([resized]*3, axis=-1)  # Shape becomes (224, 224, 3)
    return resized_rgb / 255.0


