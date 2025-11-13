import React from "react";
import "../App.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My Academic Journey</p>

      <div className="education-grid">
        <div className="education-card left">
          <div className="edu-header">
            <h3 className="edu-title">Bachelor of Computer Applications</h3>

          </div>
          <p className="J.M.P.C.Bhandara">RTMNU University</p>
          <p className="J.M.P.C Bhandara">2023 - 2026</p>
          <p className="BSC/CS(BACHELORS OF SCIENCE IN COMPUTER SCIENCE)">
            Learned web development, databases, and programming fundamentals.
          </p>
        </div>

        <div className="education-card right">
          <div className="edu-header">
            <h3 className="edu-title">2020 - 2023</h3>
            <span className="HSC">Science Stream</span>
          </div>
          <p className="">Adharsh vidyalay Dahegaon</p>
          <p className="edu-duration">2016 - 2020</p>
          <p className="8th to 10th Science">
            Focused on mathematics, computer science, and logical reasoning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
