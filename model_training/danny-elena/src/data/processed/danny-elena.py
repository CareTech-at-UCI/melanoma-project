from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
import tensorflow as tf
from tensorflow.keras import layers, models, regularizers
import pandas as pd
from sklearn.model_selection import train_test_split
import os

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH_2019 = os.path.join(BASE_DIR, "isic2019_combined_labels.csv")
CSV_PATH_2020 = os.path.join(BASE_DIR, "isic2020_combined_labels.csv")
IMAGE_FOLDER = os.path.join(BASE_DIR, "augmented_images")
TRAIN_CSV = os.path.join(BASE_DIR, "train_data.csv")
TEST_CSV = os.path.join(BASE_DIR, "test_data.csv")

# Model definition (from notebook, using 224x224 to match current pipeline)
import tensorflow as tf
print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
print("GPUs:", tf.config.list_physical_devices('GPU'))

def create_cnn_model(input_shape=(224, 224, 1)):
    model = models.Sequential()
    model.add(layers.Conv2D(
        32, (3, 3), activation='relu', input_shape=input_shape))
    model.add(layers.BatchNormalization())
    model.add(layers.MaxPooling2D((2, 2)))
    model.add(layers.Conv2D(64, (3, 3), activation='relu'))
    model.add(layers.BatchNormalization())
    model.add(layers.MaxPooling2D((2, 2)))
    model.add(layers.Conv2D(128, (3, 3), activation='relu'))
    model.add(layers.BatchNormalization())
    model.add(layers.MaxPooling2D((2, 2)))
    model.add(layers.GlobalAveragePooling2D())
    model.add(layers.Dense(128, activation='relu'))
    model.add(layers.Dropout(0.3))
    model.add(layers.Dense(1, activation='sigmoid'))
    model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0003),
                  loss='binary_crossentropy',
                  metrics=['accuracy'])
    return model


def load_image(image_name, label):
    image_path = tf.strings.join([IMAGE_FOLDER, '/', image_name])
    image = tf.io.read_file(image_path)
    image = tf.image.decode_png(image, channels=1)  # Grayscale
    image = tf.image.resize(image, [224, 224])
    image = tf.cast(image, tf.float32) / 255.0  # Normalize to [0, 1]
    return image, label


def create_tf_dataset(dataframe, batch_size=32, shuffle=True):
    image_names = dataframe['image'].values
    labels = dataframe['MEL'].values
    dataset = tf.data.Dataset.from_tensor_slices((image_names, labels))
    dataset = dataset.map(load_image, num_parallel_calls=tf.data.AUTOTUNE)
    if shuffle:
        dataset = dataset.shuffle(buffer_size=1000)
    return dataset.batch(batch_size).prefetch(tf.data.AUTOTUNE)


# Load and combine datasets
print(f"Loading ISIC 2019 data from {CSV_PATH_2019}")
df_2019 = pd.read_csv(CSV_PATH_2019)
print(f"Loading ISIC 2020 data from {CSV_PATH_2020}")
df_2020 = pd.read_csv(CSV_PATH_2020)
df = pd.concat([df_2019, df_2020], ignore_index=True)
df = df.drop_duplicates(subset=['image'])

# Remove missing images
print("\nVerifying image files...")
missing_files = []
for image_name in df['image']:
    image_path = os.path.join(IMAGE_FOLDER, image_name)
    if not os.path.exists(image_path):
        missing_files.append(image_name)
if missing_files:
    print(f"\nWarning: {len(missing_files)} images are missing!")
    df = df[~df['image'].isin(missing_files)]
    print(f"Removed {len(missing_files)} rows with missing images")

# Print stats
print(f"\nFinal dataset statistics:")
print(f"Total number of images: {len(df)}")
print(f"Number of melanoma cases: {df['MEL'].sum()}")
print(f"Number of non-melanoma cases: {len(df) - df['MEL'].sum()}")

# Split into train and test sets
train_df, test_df = train_test_split(
    df, test_size=0.2, random_state=42, stratify=df["MEL"])
train_df.to_csv(TRAIN_CSV, index=False)
test_df.to_csv(TEST_CSV, index=False)

# Create datasets
train_dataset = create_tf_dataset(train_df)
test_dataset = create_tf_dataset(test_df, shuffle=False)

# Model
model = create_cnn_model()
model.summary()

# Callbacks
early_stop = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True
)
checkpoint = ModelCheckpoint(
    filepath='danny-elena.h5',
    monitor='val_loss',
    save_best_only=True,
    verbose=1
)

# Train
history = model.fit(
    train_dataset,
    validation_data=test_dataset,
    epochs=50,
    callbacks=[early_stop, checkpoint]
)

# Evaluate
test_loss, test_accuracy = model.evaluate(test_dataset)
print(f"Test Accuracy: {test_accuracy:.4f}")
print(f"Test Loss: {test_loss:.4f}")
