import React from "react";
import "./Sp_about.css";
import Sp_services from "./Sp_services";
import { useInView } from "react-intersection-observer";

export default function AboutAI() {
  const { ref, inView } = useInView({
    triggerOnce: true, // ek baar hi chale
    threshold: 0.2,    // 20% visible hone par
  });

  return (
    <div
  ref={ref}
  className="about-ai-section animate__animated"
>

      <div className="about-ai-image">
        <img
          src={
            "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024526/ai2_yrn9uc.png"
          }
          alt="AI Illustration"
          className="animate__animated animate__pulse animate__infinite"
        />
      </div>

      <div className={`about-ai-content ${inView ? "animate__animated animate__fadeInRight" : ""}`}>
        <h2
          className={inView ? "animate__animated animate__fadeInDown" : ""}
        >
          AI-Powered Branding and Marketing Solutions for the Digital Age
        </h2>
        <p className={inView ? "animate__animated animate__fadeInUp" : ""}>
          We specialize in AI-powered branding and marketing solutions. Our
          technology creates unique brand identities with precision. We design
          hyper-personalized campaigns for every audience. Data-driven insights
          guide impactful strategies. We help brands grow in the digital age.
        </p>
        <p
          className={`about-ai-closing animate__animated ${
            inView ? "animate__fadeInUp" : ""
          }`}
        >
          AI isn’t just shaping the future of branding — it{" "}
          <b>is the future</b>.
        </p>
        <a
          href="https://spadvertising.in/contact"
          className="get-quote-btn12 animate__animated animate__zoomIn"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
