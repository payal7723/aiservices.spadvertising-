import React from "react";
import "./Sp_services.css";
import {
  FaPalette,
  FaChartLine,
  FaBullseye,
  FaSatelliteDish,
  FaRobot,
  FaVideo,
  FaBrain,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    title: "AI Brand Identity Generator",
    description:
      "Generate a unique brand identity with AI-powered logos, typography, color palettes, and design elements customized for your business. Enhance your visual presence with consistent, professional branding across all platforms.",
    icon: <img src="./788.jpg" />,
  },
  {
    title: "Predictive Campaign Analytics",
    description: "Leverage AI-driven insights to predict campaign performance with accuracy. Optimize strategies, maximize ROI, and stay ahead of market trends.",
    icon: <img src="./analysis_pre.jpg" />,
  },
  {
    title: "Hyper-Personalized Ad Creatives",
    description:
      "Craft AI-powered ad creatives tailored to each micro-audience segment. Boost engagement, conversions, and brand impact with hyper-personalized messaging.",
    icon: <img src="./5257.jpg" />,
  },
  {
    title: "AI-Powered Social Listening",
    description:
      "Track conversations and trends with AI-powered social listening tools. Understand customer sentiment, gain competitor insights, and refine strategies in real time.",
    icon: <img src="aipic.jpg" />,
  },
  {
    title: "Content Automation Suite",
    description:
      "Automate content creation, scheduling, and distribution with AI-powered tools. Includes AI-assisted blog writing, social captions, and email sequences aligned with your brand tone in real time.",
    icon: <img src="aicontent.jpg"/>,
  },
  {
    title: "Video Personalization ",
    description:
      "AI-generated videos that adapt text, voiceover, and visuals for each viewer segment. Boost engagement, conversions, and loyalty with real-time personalized storytelling.",
    icon: <img src="promo.jpg" />,
  },
  {
    title: "Neuro-Marketing Insights",
    description:
     "AI analysis of eye-tracking, heatmaps, and emotional responses. Unlock neuro-marketing insights to optimize campaigns and influence decisions.",
    icon: <img src="neuro.jpg" />,
  },
  {
    title: "AI-Driven Influencer Matching ",
    description:
     "Match with the right influencers using AI-driven audience and engagement analysis. Boost brand reach, trust, and conversions through precise collaborations.",
    icon: <img src="influence.jpg" />,
  },
];

const Services = () => {
  return (
    <div className="services-main">
      <div className="services">
        <h2 className="services-title">
          Our <span>AI-Powered Branding & Marketing</span> Services
        </h2>
        <div className="services-slider">
  {services.map((service, index) => (
    <div className="service-card" key={index}>
      <div className="service-icon">
        <img src={service.icon.props.src} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <p className="description">{service.description}</p>
      {/* <p className="value">{service.value}</p> */}
      {/* <button className="service-btn">→</button> */}
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Services;
