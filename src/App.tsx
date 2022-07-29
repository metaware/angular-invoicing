import "./style.css"
import { Counter } from "./Counter"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-md-center">
            React TypeScript Webpack - {process.env.NODE_ENV}
          </h1>
        </div>
        <div className="col">
          <img src="./images/logo.svg" alt="Ploomes logo" />
        </div>
        <Counter />
      </div>
    </div>
  )
}

export default App
