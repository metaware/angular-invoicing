import "./style.css"
import { Counter } from "./Counter"

function App() {
  return (
    <div>
      <h1>React TypeScript Webpack - {process.env.NODE_ENV}</h1>
      <img src="./images/example.png" alt="Woman listening to music" />
      <img
        src="./images/example.svg"
        alt="Woman listening to music"
        width={100}
      />
      <Counter />
    </div>
  )
}

export default App
