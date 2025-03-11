import React, { useState } from "react";
import "../styles/Portfolio.css";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import portfolioItems from "../data/PortfolioImages"; 

const Portfolio = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  return (
    <section className="portfolio">
      <h2 className="section-title">Our Work Portfolio</h2>
      <p className="section-subtitle">Showcasing our best printing works</p>

      <div className="portfolio-container">
        {portfolioItems.map((item, index) => (
          <div
            className="portfolio-card"
            key={index}
            onClick={() => setSelectedImages(item.images)}
          >
            <img src={item.images[0]} alt={item.title} className="portfolio-image" />
            <div className="overlay">
              <FaSearchPlus className="zoom-icon" />
              <p className="portfolio-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImages && (
        <div className="lightbox" onClick={() => setSelectedImages(null)}>
          <FaTimes className="close-icon" onClick={() => setSelectedImages(null)} />
          <div className="lightbox-content">
            {selectedImages.map((img, index) => (
              <img key={index} src={img} alt="Preview" className="lightbox-image" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
