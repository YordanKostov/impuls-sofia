import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import download from "../../assets/download.svg";
import "./navbar.css";
import config from "../../config/index.json";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigation = config.navigation;

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={download} />
        </div>
        <div className="navbar-links_container">
          {navigation.map((link) => (
            <p>
              <a href={link.href}>{link.name}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              {navigation.map((link) => (
                <p>
                  <a href={link.href}>{link.name}</a>
                </p>
              ))}
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
