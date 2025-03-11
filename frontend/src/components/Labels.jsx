import React from "react";
import { Link } from "react-router-dom";
import "../styles/Labels.css";

// Import images for each label type
import metallicGoldLabels from "../assets/label.png";
import metallicSilverLabels from "../assets/label.png";
import kraftPaperLabels from "../assets/label.png";
import premiumWhiteLabels from "../assets/label.png";
import clearLabels from "../assets/label.png";
import waterProofLabels from "../assets/label.png";

const labelTypes = [
  { name: "Metallic Gold Paper Labels", image: metallicGoldLabels },
  { name: "Metallic Silver Paper Labels", image: metallicSilverLabels },
  { name: "Kraft Paper Labels", image: kraftPaperLabels },
  { name: "Premium White Labels", image: premiumWhiteLabels },
  { name: "Clear Labels", image: clearLabels },
  { name: "Water Proof Labels", image: waterProofLabels },
];

const Labels = () => {
  return (
    <section className="labels">
      <h2 className="section-title">Labels</h2>
      <p className="section-subtitle">Choose from a variety of label types</p>
      <div className="labels-container">
        {labelTypes.map((label, index) => (
          <div className="label-item" key={index}>
            <img src={label.image} alt={label.name} className="label-image" />
            <p className="label-name">{label.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Labels;