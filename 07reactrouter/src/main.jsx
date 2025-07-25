import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import { About, Contact, Home, User, Github } from "./components/index.js"
import { Layout } from "./Layout.jsx"
import { githubInfoLoader } from "./components/Github/Github.jsx"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      {/* loader=
      {() => {
        fetch()
      }} */}
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
