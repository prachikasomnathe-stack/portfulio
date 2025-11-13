import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>HTML| React | JAVA | MYSQL |</p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">🐱‍💻</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Prachika — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
