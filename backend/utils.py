from PIL import Image
import numpy as np
import io

def preprocess_image(file) -> np.ndarray:
    image = Image.open(io.BytesIO(file)).convert("RGB")
    image = image.resize((224, 224))
    return np.array(image) / 255.0
