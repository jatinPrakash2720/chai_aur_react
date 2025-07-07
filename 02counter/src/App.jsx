import "./App.css"
import { useState } from "react"
function App() {
  // let counter = 5
  const [counter, setCounter] = useState(15)
  function addValue() {
    // console.log(Math.random(), counter)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  function removeValue() {
    if (counter === 0) return
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>COunter value : {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}> remove value {counter}</button>
    </>
  )
}

export default App
