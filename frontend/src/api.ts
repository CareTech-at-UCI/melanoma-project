export async function predictImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("http://localhost:8000/predict/", {
    method: "POST",
    body: formData,
  });

  return res.json(); // { prediction: "Melanoma", confidence: 0.87 }
}


