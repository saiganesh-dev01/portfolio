import { Route, Routes } from "react-router-dom"

import about from "./content/about.md?raw"
import skills from "./content/skills.md?raw"

import NavBar from "./componenet/NavBar"
import Home from "./page/Home"
import Common from "./page/Common"
import Contact from "./page/Contact"
import Footer from "./componenet/Footer"

import "./App.css"
function App() {

  return (
    <div id="all">
      <NavBar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Common content={about} />} />
          <Route path="/skills" element={<Common content={skills} />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
