import React from "react";
import { Link } from "react-router-dom";
import "../styles/Envelopes.css";

// Import images for each envelope type
import envelope10 from "../assets/envelope.png";
import envelopeA5 from "../assets/envelope.png";
import envelopeA6 from "../assets/envelope.png";
import envelopeKraft from "../assets/envelope.png";

const envelopeTypes = [
  { name: "#10 Envelope (long)", image: envelope10 },
  { name: "A5 Envelope", image: envelopeA5 },
  { name: "A6 Envelope", image: envelopeA6 },
  { name: "Kraft Envelope", image: envelopeKraft },
];

const Envelopes = () => {
  return (
    <section className="envelopes">
      <h2 className="section-title">Envelopes</h2>
      <p className="section-subtitle">Choose from a variety of styles</p>
      <div className="envelopes-container">
        {envelopeTypes.map((envelope, index) => (
          <div className="envelope-item" key={index}>
            <img src={envelope.image} alt={envelope.name} className="envelope-image" />
            <p className="envelope-name">{envelope.name}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
  );
};

export default Envelopes;