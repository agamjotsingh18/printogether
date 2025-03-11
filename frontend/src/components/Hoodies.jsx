import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hoodies.css";

// Import images for each hoodie type
import customPrintedZipperHoodie from "../assets/hoodie.png";
import customPrintedPulloverHoodies from "../assets/hoodie.png";
import embroideredZipHoodies from "../assets/hoodie.png";
import embroideredPulloverHoodies from "../assets/hoodie.png";

const hoodieTypes = [
  { name: "Custom Printed Zipper Hoodies", image: customPrintedZipperHoodie },
  { name: "Custom Printed Pullover Hoodies", image: customPrintedPulloverHoodies },
  { name: "Embroidered Zip Hoodies", image: embroideredZipHoodies },
  { name: "Embroidered Pullover Hoodies", image: embroideredPulloverHoodies },
];

const Hoodies = () => {
  return (
    <section className="hoodies">
      <h2 className="section-title">Hoodies</h2>
      <p className="section-subtitle">Choose from a variety of hoodie styles</p>
      <div className="hoodies-container">
        {hoodieTypes.map((hoodie, index) => (
          <div className="hoodie-item" key={index}>
            <img src={hoodie.image} alt={hoodie.name} className="hoodie-image" />
            <p className="hoodie-name">{hoodie.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Hoodies;