import React from "react";
import { Link } from "react-router-dom";
import "../styles/Caps.css";

// Import images for each cap type
import printedPlainCaps from "../assets/cap.png";
import lineStitchingCaps from "../assets/cap.png";
import pipingCaps from "../assets/cap.png";
import tippingCaps from "../assets/cap.png";

const capTypes = [
  { name: "Printed Plain Caps", image: printedPlainCaps },
  { name: "Line Stitching Caps", image: lineStitchingCaps },
  { name: "Piping Caps", image: pipingCaps },
  { name: "Tipping Caps", image: tippingCaps },
];

const Caps = () => {
  return (
    <section className="caps">
      <h2 className="section-title">Caps</h2>
      <p className="section-subtitle">Choose from a variety of cap styles</p>
      <div className="caps-container">
        {capTypes.map((cap, index) => (
          <div className="cap-item" key={index}>
            <img src={cap.image} alt={cap.name} className="cap-image" />
            <p className="cap-name">{cap.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Caps;