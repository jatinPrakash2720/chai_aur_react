import { useState } from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="  border-2 rounded-3xl bg-gray-300 flex flex-col h-7/12 w-4/5 items-center justify-center p-10 ">
          <h1 className="text-3xl font-extrabold text-black">
            Learn about Redux Toolkit
          </h1>
          <AddTodo />

          <div className=" overflow-y-scroll no-scrollbar h-fit w-full ">
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
