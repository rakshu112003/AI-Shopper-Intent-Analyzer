import Header from "../components/Header";
import EventInput from "../components/EventInput";

function Home() {
  return (
    <div>
      <Header />

      <div style={{ padding: "30px" }}>
        <h2>Welcome 👋</h2>

        <p>
          This application analyzes ecommerce shopper behavior and provides AI-powered recommendations.
        </p>

        <EventInput />
      </div>
    </div>
  );
}

export default Home;
