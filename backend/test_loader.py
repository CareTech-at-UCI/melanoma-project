# test_loader.py
import os
from dotenv import load_dotenv; load_dotenv()
from huggingface_hub import hf_hub_download
import tensorflow as tf

repo = os.environ["MODEL_REPO"]
fname = os.environ["MODEL_FILENAME"]
p = hf_hub_download(repo_id=repo, filename=fname, token=os.getenv("HF_TOKEN"))
m = tf.keras.models.load_model(p, compile=False)
print("Loaded OK:", m is not None)
