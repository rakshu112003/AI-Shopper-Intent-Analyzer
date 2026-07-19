function AnalysisResult({ result }) {
  if (!result) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Analysis Result</h2>

      <p>
        <strong>Shopper State:</strong> {result.shopperState}
      </p>

      <p>
        <strong>Confidence:</strong> {result.confidence}%
      </p>

      <h3>Evidence</h3>

      <ul>
        {result.evidence?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Recommended Actions</h3>

      <ul>
        {result.recommendedActions?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnalysisResult;
