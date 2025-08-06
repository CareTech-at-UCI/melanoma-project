from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from model import predict_image
from utils import preprocess_image

app = FastAPI()

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or Render URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Melanoma detection API is live!"}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    preprocessed = preprocess_image(contents)
    confidence = predict_image(preprocessed)
    label = "Melanoma" if confidence > 0.5 else "Non-Melanoma"
    return {"prediction": label, "confidence": confidence}
