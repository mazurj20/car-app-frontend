import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar__element">HOME</h1>
      </Link>
    </div>
  );
}

export default Navbar;
