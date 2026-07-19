import { GoogleGenAI } from "@google/genai";

function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found");
  }

  return new GoogleGenAI({ apiKey });
}

export async function analyzeEvents(events) {
  const ai = getAI();

  const prompt = `
You are an ecommerce personalization expert.

Analyze these customer events:

${events.join("\n")}

Classify the customer into ONE of these shopper states:
- Browser
- Comparer
- Discount Seeker
- Cart Abandoner
- Loyal Customer

Based on the events, return ONLY valid JSON.
Do NOT include markdown, code blocks, or explanations.

Expected JSON format:

{
  "shopperState": "",
  "confidence": 0,
  "evidence": [],
  "recommendedActions": []
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown if Gemini returns it
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}
