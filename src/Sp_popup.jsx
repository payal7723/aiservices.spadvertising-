import React, { useState } from "react";
import "./Sp_popup.css";

const Popup = ({ onClose }) => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box animate-popup">
        {/* LEFT SIDE */}
        {/* LEFT SIDE */}
        <div className="popup-left">
          <h1>FREE AI BRAND AUDIT</h1>
          <p>Uncover AI Opportunities for Your Branding and Marketing</p>

          <div className="list-with-image">
            <img src="/ml.png" alt="AI Icon" className="list-image" />
            <ul>
              <li>Evaluate your brand's AI-readiness</li>
              <li>Identify areas for AI-driven improvement</li>
              <li>Discover personalization & automation strategies</li>
              <li>Receive strategic recommendations for the AI era</li>
            </ul>
          </div>

          {/* <button className="audit-btn">REQUEST YOUR AUDIT</button> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="popup-right">
          {/* Close button */}
          <button className="close-btn" onClick={() => setOpen(false)}>
            ✖
          </button>

          <h2>Contact Us</h2>

          {/* FORM */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <input type="tel" id="phone" placeholder=" " required />
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                rows="4"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
