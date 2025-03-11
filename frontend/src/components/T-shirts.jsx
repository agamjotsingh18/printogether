import React from "react";
import { Link } from "react-router-dom";
import "../styles/T-shirts.css";

// Import images for each T-shirt type
import roundNeckTShirts from "../assets/tshirt.png";
import poloTShirts from "../assets/tshirt.png";
import vNeckTShirts from "../assets/tshirt.png";

const tShirtTypes = [
  { name: "Round Neck T-shirts", image: roundNeckTShirts },
  { name: "Polo T-shirts", image: poloTShirts },
  { name: "V-Neck T-shirts", image: vNeckTShirts },
];

const TShirts = () => {
  return (
    <section className="t-shirts">
      <h2 className="section-title">T-Shirts</h2>
      <p className="section-subtitle">Choose from a variety of T-shirt styles</p>
      <div className="t-shirts-container">
        {tShirtTypes.map((tshirt, index) => (
          <div className="tshirt-item" key={index}>
            <img src={tshirt.image} alt={tshirt.name} className="tshirt-image" />
            <p className="tshirt-name">{tshirt.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default TShirts;