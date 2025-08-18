from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv; load_dotenv()
from model import predict_image
from utils import preprocess_image
from huggingface_hub import hf_hub_download
from contextlib import asynccontextmanager
import os
import tensorflow as tf

os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

@asynccontextmanager
async def lifespan(app: FastAPI):
    global MODEL
    MODEL = load_model_from_hub()
    yield


app = FastAPI(lifespan=lifespan)

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://melanoma-detector.vercel.app"],  # or Render URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Melanoma detection API is live!"}

def load_model_from_hub():
    repo_id = os.environ["MODEL_REPO"]           
    filename = os.getenv("MODEL_FILENAME", "model.h5")

    local_path = hf_hub_download(
        repo_id=repo_id,
        filename=filename,          
        token=os.getenv("HF_TOKEN") 
    )

    model = tf.keras.models.load_model(local_path, compile=False)
    return model

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    preprocessed = preprocess_image(contents)
    confidence = predict_image(preprocessed)
    label = "Melanoma" if confidence > 0.75 else "Non-Melanoma"
    return {"prediction": label, "confidence": confidence}
