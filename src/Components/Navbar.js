import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../Images/585bb6c8cb11b227491c32a7.png";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar__title">
          <img src={logo} />
        </h1>
      </Link>
      <div className="navbar__right">
        <AddIcon fontSize="large" />
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <ExploreIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
