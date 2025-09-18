// Navbar.jsx
import React from "react";
import "./web_head.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Left */}
      <div className="navbar-logo">
        <img src="./web_logo.png" alt="Logo" />
      </div>

      {/* Menu Right */}
      <ul className="navbar-links1">
        <li><a href="#home">Homepage</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
