import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#home" className="nav-logo">MyPortfolio</a>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
