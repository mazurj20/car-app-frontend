import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from '../Images/585bb6c8cb11b227491c32a7.png'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar__title"><img src={logo} /></h1>
      </Link>
      <div className="navbar__right">
        <h3 className="navbar__element">EXPLORE</h3>
        <h3 className="navbar__element">EXPLORE</h3>
      </div>
    </div>
  );
}

export default Navbar;
