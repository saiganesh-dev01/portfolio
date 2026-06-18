import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
	{name:"Blog", path:"/blog"},
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav id="navbar">
            <Link to="/" className="navitems">Maram Sai Ganesh Reddy</Link>

            <div className="nav-links">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="navitems"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
	    <a id="menu">Menu</a>
        </nav>
    );
}
