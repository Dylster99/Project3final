import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  