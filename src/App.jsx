import {Routes, Route} from "react-router-dom"

import Navbar from "./component/Navbar.jsx"
import Home from "./page/Home.jsx"
import Md from "./page/Md.jsx"
import Projects from "./page/Projects.jsx"
import Contact from "./page/Contact.jsx"
import Bransley from "./component/Canvas.jsx"
import Footbar from "./component/Footbar.jsx"
import about from "./content/About.md?raw"
import "./index.css"

function App() {
  return (
	  <>
	  	<Bransley />
    		<div className="container">
	  		<Navbar />
	  		<main id="content">
				<Routes>
	  				<Route path="/" element={<Home />} />
	  				<Route path="/about" element={<Md content={about} />} />
	  				<Route path="/projects" element={<Projects />} />
	  				<Route path="/contact" element={<Contact />} />
	  			</Routes>
	  		</main>
	  		<Footbar />
    		</div>
	  </>
  )
}

export default App
