import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    function () {
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (numberAllowed) str += "0123456789"
      if (characterAllowed) str += "!@#$^&*()_+-={}[]|:,./<>?/~`"

      for (let i = 1; i <= length; i++) {
        let charIndex = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(charIndex)
      }
      setPassword(pass)
    },
    [length, numberAllowed, characterAllowed, setPassword]
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    //we are using window directly because i am using core react, but when i use next, due to server side rendering
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed])

  return (
    <>
      <div className=" align-middle w-full max-w-8/12 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <div className="flex flex-col gap-4 py-2">
          <h1 className="text-2xl font-bold text-center">Password Generator</h1>
          <div className="flex-1 flex-row">
            <div className="w-full flex flex-row mb-2">
              <input
                type="text"
                readOnly
                value={password}
                placeholder="Password"
                className="flex-1 outline-0 text-2xl  bg-gray-700 border border-gray-600 rounded-l-lg px-6 py-3 text-white"
                ref={passwordRef}
              />
              <button
                onClick={copyPasswordToClipboard}
                
                className="bg-blue-600 text-white text-2xl rounded-r-lg px-4 py-2"
              >
                Copy
              </button>
            </div>
          </div>
          <div className="flex-1 flex-row ">
            <div className="w-full flex  items-baseline justify-around flex-row mb-2 gap-2">
              <div className="flex flex-row  justify-center items-center mb-2 gap-2">
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer text-1xl"
                  onChange={(e) => {
                    setLength(e.target.value)
                  }}
                />
                <label className="text-2xl">
                  Length: <span className="text-white">{length}</span>
                </label>
              </div>
              <div className="flex flex-row justify-center items-center mb-4 gap-2">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev)
                  }}
                />
                <label className="text-2xl">Number</label>
              </div>
              <div className="flex flex-row justify-center items-center mb-4 gap-2">
                <input
                  type="checkbox"
                  defaultChecked={characterAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharacterAllowed((prev) => !prev)
                  }}
                />
                <label className="text-2xl">Character</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
