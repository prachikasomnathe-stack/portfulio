import React from "react";
import "../App.css"; // Correct path to your CSS file

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder=" Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder=" Email" required />
          </div>

          <div className="form-group">
            <textarea placeholder=" Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="info-item">📧 prachikasomnathe@gmail.com</div>
          <div className="info-item">📞 +91 9307558778</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
