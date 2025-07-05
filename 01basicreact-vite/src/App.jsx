import Chai from "./chai"
function App() {
  const username = "chai aur code"
  return (
    //fragment
    <>
      <Chai />
      <h1>chai aur react {username}</h1>
      {/*evaluated javascript. hi likh skte hai,,, yani ki final outcome hi
      likh skta hu*/}
      <p>Test para</p>
    </>
  )
}

export default App
