import { useState } from "react";
import { analyzeShopper } from "../services/api";
import AnalysisResult from "./AnalysisResult";

function EventInput() {
  const [events, setEvents] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    const eventList = events
      .split("\n")
      .map((event) => event.trim())
      .filter((event) => event !== "");

    try {
      const data = await analyzeShopper(eventList);
      setResult(data);
    } catch (error) {
      alert("Failed to analyze shopper.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Customer Events</h2>

      <textarea
        rows="8"
        cols="60"
        placeholder={`Example:
view_product
compare_products
add_to_cart`}
        value={events}
        onChange={(e) => setEvents(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAnalyze}>
        Analyze Shopper
      </button>

      <AnalysisResult result={result} />
    </div>
  );
}

export default EventInput;
