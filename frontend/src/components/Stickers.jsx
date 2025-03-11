import React from "react";
import { Link } from "react-router-dom";
import "../styles/Stickers.css";

// Import images for each sticker type
import matteLaminatedStickers from "../assets/sticker.png";
import holographicStickers from "../assets/sticker.png";
import goldFoilingStickers from "../assets/sticker.png";
import spotUVStickers from "../assets/sticker.png";
import silverFoilingStickers from "../assets/sticker.png";
import domeStickers from "../assets/sticker.png";
import frontAdhesiveStickers from "../assets/sticker.png";
import customOpaqueStickers from "../assets/sticker.png";
import clearStickers from "../assets/sticker.png";

const stickerTypes = [
  { name: "Matte Laminated Stickers", image: matteLaminatedStickers },
  { name: "Holographic Stickers", image: holographicStickers },
  { name: "Gold Foiling Stickers", image: goldFoilingStickers },
  { name: "Spot UV Stickers", image: spotUVStickers },
  { name: "Silver Foiling Stickers", image: silverFoilingStickers },
  { name: "Dome Stickers", image: domeStickers },
  { name: "Front Adhesive Stickers", image: frontAdhesiveStickers },
  { name: "Custom Opaque Stickers", image: customOpaqueStickers },
  { name: "Clear Stickers", image: clearStickers },
];

const Stickers = () => {
  return (
    <section className="stickers">
      <h2 className="section-title">Stickers</h2>
      <p className="section-subtitle">Choose from a variety of sticker types</p>
      <div className="stickers-container">
        {stickerTypes.map((sticker, index) => (
          <div className="sticker-item" key={index}>
            <img src={sticker.image} alt={sticker.name} className="sticker-image" />
            <p className="sticker-name">{sticker.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Stickers;