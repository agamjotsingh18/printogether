import React from "react";
import { Link } from "react-router-dom";
import "../styles/PhotoFrames.css";

// Import images for each photo frame type
import ledPhotoFrames from "../assets/photo-frame.png";
import classicPhotoFrames from "../assets/photo-frame.png";
import wallPhotoFrames from "../assets/photo-frame.png";
import canvasPhotoFrames from "../assets/photo-frame.png";
import mattePhotoFrames from "../assets/photo-frame.png";
import customAcrylicPhotoFrames from "../assets/photo-frame.png";
import framelessPhotoFrames from "../assets/photo-frame.png";

const photoFrameTypes = [
  { name: "Photo with LED Frames", image: ledPhotoFrames },
  { name: "Photo with Classic Frames", image: classicPhotoFrames },
  { name: "Photo with Wall Frames", image: wallPhotoFrames },
  { name: "Canvas Photo with Frames", image: canvasPhotoFrames },
  { name: "Matte Photo with Frames", image: mattePhotoFrames },
  { name: "Custom Acrylic Photo Frames", image: customAcrylicPhotoFrames },
  { name: "Frameless Photo Frames", image: framelessPhotoFrames },
];

const PhotoFrames = () => {
  return (
    <section className="photo-frames">
      <h2 className="section-title">Photo Frames</h2>
      <p className="section-subtitle">Choose from a variety of photo frame styles</p>
      <div className="photo-frames-container">
        {photoFrameTypes.map((frame, index) => (
          <div className="frame-item" key={index}>
            <img src={frame.image} alt={frame.name} className="frame-image" />
            <p className="frame-name">{frame.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default PhotoFrames;