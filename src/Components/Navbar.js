import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar__title">Carzzzz</h1>
      </Link>
      <div className="navbar__right">
        <h3 className="navbar__element">about us</h3>
        <h3 className="navbar__element">explore</h3>
      </div>
    </div>
  );
}

export default Navbar;
