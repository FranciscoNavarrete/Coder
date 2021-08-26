import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"

const NavBar = () =>
    <header>
        <nav className="container navbar navbar-expand-lg  navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo2.png" width="30" height="30" className="d-inline-block align-top" color-text="white" alt=""></img>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contacto">Contacto</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/Categories/electronics">Electronics</Link>
                            <Link className="dropdown-item" to="/Categories/jewelery">Jewelery</Link>
                            <Link className="dropdown-item" to="/Categories/women's clothing">Men clothing</Link>
                            <Link className="dropdown-item" to="/Categories/women's clothing">Women clothing</Link>
                        </div>

                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
                <span className="navbar-text ml-auto" >
                    <Link className="nav-link " to="/cart"><CartWidget /></Link>

                </span>
            </div>
        </nav>
    </header>

export default NavBar