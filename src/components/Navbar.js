import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#Need Analysis">Need Analysis</a></li>
        <li><a href="#Idea & Sketches">Idea & Sketches</a></li>
        <li><a href="#Initial Design">Initial Design</a></li>
        <li><a href="#Bill of Materials">Bill of Materials</a></li>
        <li><a href="#Fabiraction Process">Fabiraction Process</a></li>
        <li><a href="#Final Product">Final Product</a></li>
        <li><a href="#Process Footage">Process Footage</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
