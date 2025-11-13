import React from "react";
import myphoto from "../assets/profile.jpg";


function Main() {
  return (
    <div className="main-container" style={styles.container}>
      {/* Left Side - About Info */}
      <div style={styles.textSection}>
        <h1 style={styles.title}>Hi, I'm Prachika</h1>
        <h3 style={styles.subtitle}>Frontend  & BACKEND Developer | Coder </h3>
        <p style={styles.about}>
          I am passionate about creating clean, beautiful, and functional web
          interfaces. I love working with React, JavaScript, and CSS ,JAVA to bring
          ideas to life.
        </p>
        <a href="#contact" style={styles.button}>
          Contact Me
        </a>
      </div>

      {/* Right Side - Photo */}
      <div style={styles.imageSection}>
        <img src={myphoto} alt="My Profile" style={styles.image} />
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    flexWrap: "wrap",
  },
  textSection: {
    flex: "1",
    minWidth: "300px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#555",
  },
  about: {
    marginTop: "10px",
    color: "#666",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
  imageSection: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default Main;
