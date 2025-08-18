const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000";

export async function predictImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/predict/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json(); // { prediction: "Melanoma", confidence: 0.87 }
}
