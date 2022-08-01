import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
