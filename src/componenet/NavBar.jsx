import { Link } from "react-router-dom"
import { useState } from "react"

import "./navbar.css"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ]

    return (
        <div className="navbar">
            <Link to="/" className="navitem"><h3>Sai Ganesh</h3></Link>

            <div id="navitems">
                {navItems.map((item) => (
                    <div key={item.path}>
                        <Link to={item.path} className="navitem">
                            <h3>{item.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>

            <div id="navbtn" onClick={() => setIsOpen(!isOpen)}>
                <h3>Menu</h3>
            </div>

            {isOpen && (
                <div id="resnavitems">
                    {navItems.map((item) => (
                        <div key={item.path}>
                            <Link to={item.path} className="resnavitem">
                                <h3>{item.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}