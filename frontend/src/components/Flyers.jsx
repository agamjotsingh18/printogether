import React from "react";
import { Link } from "react-router-dom";
import "../styles/Flyers.css";

// Import images for each flyer type
import offerFlyers from "../assets/flyer.png";
import businessFlyers from "../assets/flyer.png";
import productCatalogFlyers from "../assets/flyer.png";
import a4Flyers from "../assets/flyer.png";
import a5Flyers from "../assets/flyer.png";
import dlFlyers from "../assets/flyer.png";

const flyerTypes = [
  { name: "Offer Flyers", image: offerFlyers },
  { name: "Business Flyers", image: businessFlyers },
  { name: "Product Catalog Flyers", image: productCatalogFlyers },
  { name: "A4 Flyer Printing", image: a4Flyers },
  { name: "A5 Flyer Printing", image: a5Flyers },
  { name: "DL Flyer Printing", image: dlFlyers },
];

const Flyers = () => {
  return (
    <section className="flyers">
      <h2 className="section-title">Flyers</h2>
      <p className="section-subtitle">Choose from a variety of flyer types</p>
      <div className="flyers-container">
        {flyerTypes.map((flyer, index) => (
          <div className="flyer-item" key={index}>
            <img src={flyer.image} alt={flyer.name} className="flyer-image" />
            <p className="flyer-name">{flyer.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Flyers;