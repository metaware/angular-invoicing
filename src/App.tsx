import "./style.css";
import IMAGE from "./example.png";
import LOGO from "./example.svg";

function App() {
  return (
    <div>
      <h1>React TypeScript Webpack</h1>
      <img src={IMAGE} alt="Woman listening to music" />
      <img src={LOGO} alt="Woman listening to music" width={100} />
    </div>
  );
}

export default App;
