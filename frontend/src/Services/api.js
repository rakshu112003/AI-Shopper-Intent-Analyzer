const API_URL = "http://localhost:5000/api/analyze";

export async function analyzeShopper(events) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ events }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to analyze shopper.");
  }

  return data;
}
