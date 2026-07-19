import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { events } = req.body;

    if (!events || !Array.isArray(events)) {
      return res.status(400).json({
        error: "Events array is required.",
      });
    }

    let state = "Browser";
    let confidence = 70;
    let recommendation = "Show personalized product recommendations";

    if (events.includes("add_to_cart")) {
      state = "Cart Abandoner";
      confidence = 90;
      recommendation = "Send cart reminder with personalized discount";
    } 
    else if (events.includes("compare_products")) {
      state = "Comparer";
      confidence = 80;
      recommendation = "Show product comparison and customer reviews";
    } 
    else if (events.includes("discount_click")) {
      state = "Discount Seeker";
      confidence = 85;
      recommendation = "Offer limited-time discount";
    }

    res.json({
      state,
      confidence,
      evidence: events,
      recommendation
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
