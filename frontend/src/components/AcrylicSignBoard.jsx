import React from "react";
import { Link } from "react-router-dom";
import "../styles/AcrylicSignBoard.css";

import acrylicPhotoFrames from "../assets/acrylic-sign-board.png";
import acrylicNamePlates from "../assets/acrylic-sign-board.png";
import acrylicCalendar from "../assets/acrylic-sign-board.png";
import acrylicMagnets from "../assets/acrylic-sign-board.png";
import acrylicKeychains from "../assets/acrylic-sign-board.png";
import acrylicCoasters from "../assets/acrylic-sign-board.png";

const acrylicProducts = [
  { name: "Acrylic Photo Frames", image: acrylicPhotoFrames },
  { name: "Acrylic Name Plates", image: acrylicNamePlates },
  { name: "Acrylic Calendar", image: acrylicCalendar },
  { name: "Acrylic Magnets", image: acrylicMagnets },
  { name: "Acrylic Keychains", image: acrylicKeychains },
  { name: "Acrylic Coasters", image: acrylicCoasters },
];

const AcrylicSignBoard = () => {
  return (
    <section className="acrylic-sign-board">
      <h2 className="section-title">Acrylic Sign Boards & Products</h2>
      <p className="section-subtitle">Choose from a variety of acrylic products</p>
      <div className="acrylic-container">
        {acrylicProducts.map((product, index) => (
          <div className="acrylic-item" key={index}>
            <img src={product.image} alt={product.name} className="acrylic-image" />
            <p className="acrylic-name">{product.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default AcrylicSignBoard;