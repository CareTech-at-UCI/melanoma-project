from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv; load_dotenv()
from model import predict_image
from utils import preprocess_image
from huggingface_hub import hf_hub_download
import tensorflow as tf
from contextlib import asynccontextmanager
import os
import tensorflow as tf

os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

# Globals
MODEL = None
INTERPRETER = None
INPUT_INDEX = None
OUTPUT_INDEX = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global INTERPRETER, INPUT_INDEX, OUTPUT_INDEX
    INTERPRETER, INPUT_INDEX, OUTPUT_INDEX = load_model_from_hub()
    yield


app = FastAPI(lifespan=lifespan)

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://melanoma-detector.vercel.app", "https://melanoma-project.onrender.com" ], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Melanoma detection API is live!"}

def load_model_from_hub():
    repo_id = os.environ["MODEL_REPO"]           
    filename = os.getenv("MODEL_FILENAME", "melanoma_combo_model.keras")

    local_path = hf_hub_download(
        repo_id=repo_id,
        filename=filename,          
        token=os.getenv("HF_TOKEN") 
    )

    interpreter = tf.lite.Interpreter(model_path=local_path)
    interpreter.allocate_tensors()

    input_index = interpreter.get_input_details()[0]["index"]
    output_index = interpreter.get_output_details()[0]["index"]

    return interpreter, input_index, output_index

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # contents = await file.read()
    # preprocessed = preprocess_image(contents)
    # confidence = predict_image(preprocessed)
    # label = "Melanoma" if confidence > 0.75 else "Non-Melanoma"
    # return {"prediction": label, "confidence": confidence}

    contents = await file.read()
    preprocessed = preprocess_image(contents)  # shape (224, 224, 3)
    preprocessed = preprocessed.astype("float32")
    preprocessed = preprocessed.reshape(1, 224, 224, 3)

    # Run inference
    INTERPRETER.set_tensor(INPUT_INDEX, preprocessed)
    INTERPRETER.invoke()
    confidence = INTERPRETER.get_tensor(OUTPUT_INDEX)[0][0]

    label = "Melanoma" if confidence > 0.75 else "Non-Melanoma"
    return {"prediction": label, "confidence": float(confidence)}
