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
      "AI-assisted creation of logo variations, color palettes, and typography suggestions based on brand personality inputs.",
    value: "Faster, more tailored brand development.",
    icon: <img src="./788.jpg" />,
  },
  {
    title: "Predictive Campaign Analytics",
    description: "AI models that forecast campaign performance before launch.",
    value: "Reduces wasted ad spend, improves ROI.",
    icon: <img src="./analysis_pre.jpg" />,
  },
  {
    title: "Hyper-Personalized Ad Creatives",
    description:
      "AI that generates multiple ad versions tailored to micro-audiences.",
    value: "Higher engagement and conversion rates.",
    icon: <img src="./5257.jpg" />,
  },
  {
    title: "AI-Powered Social Listening",
    description:
      "Real-time monitoring of brand mentions, sentiment, and competitor activity.",
    value: "Faster response to trends and crises.",
    icon: <img src="aipic.jpg" />,
  },
  {
    title: "Content Automation Suite",
    description:
      "AI-assisted blog writing, social captions, and email sequences aligned with brand tone.",
    value: "Consistent, scalable content output.",
    icon: <img src="aicontent.jpg"/>,
  },
  {
    title: "Video Personalization ",
    description:
      "AI-generated videos that adapt text, voiceover,visuals for each viewer segment.",
    value: "Boosts relevance and retention.",
    icon: <img src="promo.jpg" />,
  },
  // {
  //   title: "Neuro-Marketing Insights",
  //   description:
  //     "AI analysis of eye-tracking, click heatmaps, and emotional response data.",
  //   value: "Data-backed creative decisions.",
  //   icon: <FaBrain />,
  // },
  // {
  //   title: "AI-Driven Influencer Matching",
  //   description:
  //     "Algorithmic matching of brands with influencers based on audience overlap and engagement quality.",
  //   value: "Better influencer ROI.",
  //   icon: <FaHandshake />,
  // },
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
