import tensorflow as tf
import numpy as np

# Load TFLite model once at startup
interpreter = tf.lite.Interpreter(model_path="models/melanoma_combo_model.tflite")
interpreter.allocate_tensors()

input_index = interpreter.get_input_details()[0]["index"]
output_index = interpreter.get_output_details()[0]["index"]

def predict_image(image_array: np.ndarray):
    # image_array = np.expand_dims(image_array, axis=0)  # (1, 224, 224, 3)
    # prediction = model.predict(image_array)
    # return float(prediction[0][0])

    # Ensure shape is (1,224,224,3) float32
    image_array = np.expand_dims(image_array, axis=0).astype("float32")

    # Run inference
    interpreter.set_tensor(input_index, image_array)
    interpreter.invoke()
    prediction = interpreter.get_tensor(output_index)

    return float(prediction[0][0])
    
