import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model("models/himal-han/melanoma_combo_model.keras")

def predict_image(image_array: np.ndarray):
    image_array = np.expand_dims(image_array, axis=0)  # (1, 224, 224, 3)
    prediction = model.predict(image_array)
    return float(prediction[0][0])
