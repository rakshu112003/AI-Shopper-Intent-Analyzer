const API_URL = "https://ai-shopper-intent-analyzer-3.onrender.com/api/analyze";

export async function analyzeShopper(events) {
  try {
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
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
