import React from "react";
import "./Sp_about.css";
import Sp_services from "./Sp_services"

export default function AboutAI() {
  return (
    <div className="about-ai-section">
      <div className="about-ai-image">
        <img src="./123.avif" alt="AI Illustration" />
      </div>
      
      <div className="about-ai-content">
        <h2>About AI Powered Branding & Marketing</h2>
        <p>
          Artificial Intelligence is transforming the way brands connect with
          their audiences. From creating <b>unique brand identities</b> to
          predicting campaign success before launch, AI brings <b>speed, precision, 
          and personalization</b> that traditional methods cannot match.
        </p>
        <ul>
          <li> Generate logos, colors, and typography aligned with brand personality</li>
          <li> Predict campaign performance and avoid wasted ad spend</li>
          <li> Deliver hyper-personalized ad creatives to micro-audiences</li>
          <li> Monitor brand mentions and competitors in real time</li>
          <li> Automate content creation with consistent brand tone</li>
          <li> Create dynamic video experiences for each viewer</li>
          <li> Gain neuro-marketing insights with heatmaps & eye-tracking</li>
          <li> Find influencers with the right audience match</li>
        </ul>
        <p className="about-ai-closing">
          AI isn’t just shaping the future of branding — it <b>is the future</b>.
        </p>
        <a href="#contact" className="get-quote-btn">Get Quote</a>

      </div>
      
    </div>
  );
}
