import React from "react";
import "./web_hero.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero" id="home">
        <div className="hero-left">
          <h4 className="subtitle">Strategic & Success</h4>
          <h1 className="title">
            Driving Success <br /> Through Strategic <br /> Guidance.
          </h1>
          <p className="desc">
            These services can be tailored to meet the specific needs and challenges of each
            client, providing valuable expertise and support to drive business success.
          </p>
          <div className="buttons">
            <button className="btn-primary">CONTACT US</button>
            <button className="btn-outline">FREE CONSULT</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="img-wrapper">
            <img src="./team.jpg" alt="teamwork" className="hero-img" />
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="company-logos">
        <img src="./logo1.png" alt="Logo 1" />
        <img src="./logo2.png" alt="Logo 2" />
        <img src="./logo3.png" alt="Logo 3" />
        <img src="./logo4.png" alt="Logo 4" />
      </div>
    </>
  );
};

export default HeroSection;
