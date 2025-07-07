import Card from "./components/Card"

function App() {
  let myObj = {
    username: "Jatin",
    age: 21,
  }
  let newArr = [1, 2, 3]
  return (
    <>
      import "./App.css"
      <Card channel={"chaiaurCode"} someObject={myObj} array={newArr} />
    </>
  )
}

export default App
