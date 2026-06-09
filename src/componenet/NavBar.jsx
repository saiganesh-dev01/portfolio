import { Link } from "react-router-dom"

import "./navbar.css"

export default function NavBar() {
    const navItems = [
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        {name:"Contact", path:"/contact"}
    ]

    return (
        <div className="navbar">
            <Link to="/" className="navitem"><h3>Maram Sai Ganesh Reddy</h3></Link>
            <div id="navitems">
                {navItems.map((item) => (
                    <div>
                        <Link key={item.path} to={item.path}  className="navitem">
                            <h3>{item.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}