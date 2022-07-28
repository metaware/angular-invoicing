import "./style.css"
import IMAGE from "./example.png"
import LOGO from "./example.svg"
import { Counter } from "./Counter"

function App() {
  return (
    <div>
      <h1>React TypeScript Webpack - {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="Woman listening to music" />
      <img src={LOGO} alt="Woman listening to music" width={100} />
      <Counter />
    </div>
  )
}

export default App
