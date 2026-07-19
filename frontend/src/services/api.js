const API_URL = "https://ai-shopper-intent-analyzer-3.onrender.com/api/analyze";

export async function analyzeShopper(events) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ events }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return await response.json();
}
