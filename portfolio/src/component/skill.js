import React from "react";
import "../App.css";

function Skill() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-name">HTML</h3>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
            <p className="skill-percentage">95%</p>
          </div>

          <div className="skill-card">
            <h3 className="skill-name">CSS</h3>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
            <p className="skill-percentage">90%</p>
          </div>

          <div className="skill-card">
            <h3 className="skill-name">React</h3>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <p className="skill-percentage">85%</p>
          </div>

          <div className="skill-card">
            <h3 className="skill-name">JAVA</h3>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <p className="skill-percentage">85%</p>
          </div>

          <div className="skill-card">
            <h3 className="skill-name">MYSQL</h3>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
            <p className="skill-percentage">95%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
