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
      <h3>Analysis Result</h3>

      <p>
        <strong>Shopper State:</strong>{" "}
        {result.state || "N/A"}
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {result.confidence || 0}%
      </p>

      <p>
        <strong>Evidence:</strong>
      </p>

      <ul>
        {(result.evidence || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>
        <strong>Recommended Actions:</strong>
      </p>

      <p>
        {result.recommendation || "N/A"}
      </p>
    </div>
  );
}

export default AnalysisResult;