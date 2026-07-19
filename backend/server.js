import dotenv from "dotenv";

const result = dotenv.config();

console.log("Dotenv Result:", result);
console.log("PORT:", process.env.PORT);
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

import express from "express";
import cors from "cors";
import analyzeRoute from "./routes/analyze.js";

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "AI Shopper Intent Analyzer Backend is Running 🚀",
  });
});

// Analyze Route
app.use("/api/analyze", analyzeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});