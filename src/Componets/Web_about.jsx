import React from "react";
import "./Web_about.css";

const AboutSection = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <div className="about" id="about">
        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <div className="about-img-wrapper">
            <img
              src="./meeting.jpg"
              alt="about us"
              className="about-img"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-right">
          <h4 className="subtitle">About Us</h4>
          <h1 className="title">
            Your Trusted Advisors In Business Success.
          </h1>
          <p className="desc">
            At Potensial, we understand the challenges and complexities that
            businesses face in today’s dynamic marketplace. That’s why we offer
            a comprehensive suite of consulting services.
          </p>
          <p className="desc">
            Founded on the principles of innovation, integrity, and excellence,
            we are a team of seasoned professionals.
          </p>
          <button className="btn-primary">READ MORE</button>

          <div className="stats">
            <div>
              <h2>500+</h2>
              <p>Satisfied Customers</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>
            <div>
              <h2>40+</h2>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* MARKET RESEARCH SECTION */}
      <div className="market">
        <div className="market-left">
          <h4 className="subtitle">Strategic Planning</h4>
          <h1 className="title">Market Research And Analysis.</h1>
          <p className="desc">
            Help businesses improve their operations, achieve their goals,
            and stay competitive in today’s market.
          </p>
          <button className="btn-primary">VIEW ALL</button>
        </div>

        <div className="market-right">
          <div className="service-card">
            <img src="./strategy.png" alt="Strategic Planning" />
            <h3>Strategic Planning Services</h3>
            <p>
              Business consultants can assist clients in developing long-term
              strategic plans to achieve their goals.
            </p>
          </div>

          <div className="service-card">
            <img src="./board.png" alt="Market Research" />
            <h3>Market Research And Analysis</h3>
            <p>
              Conduct thorough market research to provide insights into market
              trends, customer behaviors, and others.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
