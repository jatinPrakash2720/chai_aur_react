import "./App.css"
import UserContextProvider from "./context/UserContextProvider"
import { Login, Profile } from "./components/index"
function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is Important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
