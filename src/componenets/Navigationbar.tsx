import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "../assets/burger-menu-svgrepo-com.svg";
import Logo from "../assets/logoipsum-281.svg";
import "./navigationbar.css";

export default function Navigationbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [goHome, setGoHome] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="src/assets/logoipsum-281.svg" alt="logo" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src="src/assets/burger-menu-svgrepo-com.svg"
            alt="hamburger"
            style={{ width: "35px", height: "35px" }}
          />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
