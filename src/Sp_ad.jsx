import React from "react";
import "./Sp_ad.css";
import Sp_about from "./Sp_about";
import Sp_services from "./Sp_services";
import Sp_contact from "./Sp_contact";
import { jsPDF } from "jspdf";
import Navbar from "./Sp_nav";
import Popup from "./Sp_popup"
import Footer from "./Footer/Footer";
import "animate.css";

function Sp_ad() {
  const downloadPDF = () => {
    const pdfPath = "/SP Advertising.pdf"; // PDF directly public folder me

    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "SP_Advertising.pdf"); // download ke liye filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app-wrapper">
      {/* Minimal internal CSS to fix horizontal scroll */}
      <style>{`
        html, body, .app-wrapper {
          overflow-x: hidden; /* Prevent left-right scroll */
          max-width: 100%;
        }
        section, .head, .head-content, .main_footer {
          max-width: 100%;
          overflow-x: hidden;
        }
        img, video {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      <Navbar />
      <Popup/>

      {/* <Sp_popup message="Welcome to SP Advertising!" duration={0} /> */}
      {/* <Sp_nav /> */}

      <div className="hero-section" id="home">
        <div className="hero-container">
          {/* Left content */}
          <div className="hero-left">
            <div className="pill-btn">Welcome to SP Advertising →</div>

            <h1 className="hero-title">
              Revolutionize Your <br /> Marketing with <span>AI Power</span>
            </h1>

            <p className="hero-subtitle">
              Maximize ROI and unlock business potential with SP Advertising.
              Harness cutting-edge AI technology to create personalized
              campaigns that drive growth and lasting impact.
            </p>

            <div className="hero-buttons">
              <button className="btn primary" onClick={downloadPDF}>
                Get Quote
              </button>
              <a href="https://wa.me/918085354646">
                <button className="btn secondary">Contact Us</button>
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hero-right">
            <img
              src="/aihero.png"
              alt="AI illustration"
              className="animate__animated animate__fadeInDown"
            />
          </div>
        </div>
      </div>

      <div id="about">
        <Sp_about />
      </div>

      <div id="services">
        <Sp_services />
      </div>

      <div id="contact">
        <Sp_contact />
      </div>

      <Footer />
    </div>
  );
}

export default Sp_ad;
