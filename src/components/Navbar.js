import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-title">Anthony's Portfolio</Link>
            <div className="links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="resources">Resources</a></li>
                    <li><a href="https://github.com/antnguyen000" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar