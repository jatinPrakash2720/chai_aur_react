import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
// import { jsx as _jsx } from "react/jsx-runtime.js"

function MyApp() {
  return (
    <div>
      <h1>CustomApp ?</h1>
    </div>
  )
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
)
const anotherUser = "Chai aur code"
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  `${anotherUser} click me to visit google `
)
createRoot(document.getElementById("root")).render(
  <App />
  // reactElement
  // anotherElement

  // createRoot(document.getElementById("root")).render(
  //   MyApp()
  // ){/* <MyApp /> */}
)
