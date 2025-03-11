import React from "react";
import { Link } from "react-router-dom";
import "../styles/BusinessCards.css";

// Import images for each business card type
import standardCard from "../assets/business-card.jpg";
import premiumCard from "../assets/business-card.jpg";
import texturedCard from "../assets/business-card.jpg";
import squareCard from "../assets/business-card.jpg";
import roundedCard from "../assets/business-card.jpg";
import metallicCard from "../assets/business-card.jpg";
import circleCard from "../assets/business-card.jpg";
import uShapedCard from "../assets/business-card.jpg";

const businessCardTypes = [
  { name: "Standard Business Card", image: standardCard },
  { name: "Premium Laminated Card", image: premiumCard },
  { name: "Textured Business Card", image: texturedCard },
  { name: "Square Business Card", image: squareCard },
  { name: "Rounded Corner Business Card", image: roundedCard },
  { name: "Metallic Business Card", image: metallicCard },
  { name: "Circle Business Card", image: circleCard },
  { name: "U-Shaped Business Card", image: uShapedCard },
];

const BusinessCards = () => {
  return (
    <section className="business-cards">
      <h2 className="section-title">Business Cards</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="cards-container">
        {businessCardTypes.map((card, index) => (
          <div className="card-item" key={index}>
            <img src={card.image} alt={card.name} className="card-image" />
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default BusinessCards;