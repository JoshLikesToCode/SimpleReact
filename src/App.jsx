import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Monkey" animal="Cat" breed="Russian Blue" />
    <Pet name="Tinker" animal="Cat" breed="Long haired Monkey" />
    <Pet name="Willow" animal="Dog" breed="Mini Aussie" />
  </div>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
