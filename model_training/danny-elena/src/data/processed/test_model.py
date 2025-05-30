import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import load_model
from sklearn.metrics import f1_score, accuracy_score, confusion_matrix
import numpy as np
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEST_CSV = os.path.join(BASE_DIR, "test_data.csv")
IMAGE_FOLDER = os.path.join(BASE_DIR, "augmented_images")
MODEL_PATH = os.path.join(BASE_DIR, "danny-elena.h5")

# Load test set
test_df = pd.read_csv(TEST_CSV)


def load_image(image_name, label):
    image_path = tf.strings.join([IMAGE_FOLDER, '/', image_name])
    image = tf.io.read_file(image_path)
    image = tf.image.decode_png(image, channels=1)
    image = tf.image.resize(image, [224, 224])
    image = tf.cast(image, tf.float32) / 255.0
    return image, label


def create_tf_dataset(dataframe, batch_size=32):
    image_names = dataframe['image'].values
    labels = dataframe['MEL'].values
    dataset = tf.data.Dataset.from_tensor_slices((image_names, labels))
    dataset = dataset.map(load_image, num_parallel_calls=tf.data.AUTOTUNE)
    return dataset.batch(batch_size).prefetch(tf.data.AUTOTUNE)


test_dataset = create_tf_dataset(test_df)
model = load_model(MODEL_PATH)

loss, accuracy = model.evaluate(test_dataset)
print(f"Test Accuracy (from evaluate): {accuracy:.4f}")
print(f"Test Loss: {loss:.4f}")

y_true = []
y_pred = []

for batch_images, batch_labels in test_dataset:
    predictions = model.predict(batch_images)
    predicted_classes = (predictions > 0.5).astype(int).flatten()
    y_pred.extend(predicted_classes)
    y_true.extend(batch_labels.numpy().astype(int))

f1 = f1_score(y_true, y_pred)
acc = accuracy_score(y_true, y_pred)
conf_matrix = confusion_matrix(y_true, y_pred)

print("\nDetailed Metrics:")
print("Confusion Matrix:")
print(conf_matrix)
print(f"Accuracy: {acc:.4f}")
print(f"F1 Score: {f1:.4f}")

"""Detailed Metrics:
Confusion Matrix:
[[6520 4151]
 [ 308 5819]]
Accuracy: 0.7346
F1 Score: 0.7230"""
"""
| Class | Recall (Sensitivity) |
|---------------|---------------------|
| Melanoma | 0.950 (95.0%) |
| Non-melanoma | 0.611 (61.1%) |
"""
