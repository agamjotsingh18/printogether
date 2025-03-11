import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Print Your Imagination</h1>
        <p>High-quality printing solutions for all your needs.</p>
        <Link component={Link} to="/services" className="hero-btn">Explore Services</Link>
      </div>
    </div>
  );
};

export default Hero;
