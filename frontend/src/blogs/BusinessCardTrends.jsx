import React from "react";

const BusinessCardTrends = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Top Business Card Designs in 2025</h1>
        <p style={styles.subtitle}>
          Explore the latest trends in business card design for professionals.
        </p>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>🎨 Emerging Trends in Business Cards</h2>
        <p style={styles.text}>
          Business cards are evolving beyond just a contact detail. In **2025**, 
          they serve as **branding tools**, combining **technology, minimalism, and 
          premium materials** for a lasting impression.
        </p>

        <h2 style={styles.sectionTitle}>🔥 Hottest Business Card Trends</h2>
        <ul style={styles.list}>
          <li>💾 <strong>Smart NFC Cards:</strong> Tap to share contact details instantly.</li>
          <li>✨ <strong>Minimalist Design:</strong> Clean layouts with premium typography.</li>
          <li>🌿 <strong>Eco-Friendly Materials:</strong> Recycled paper & biodegradable plastics.</li>
          <li>🖥️ <strong>Digital QR Code Cards:</strong> Scannable cards linking to portfolios.</li>
          <li>🏆 <strong>Luxury Finishes:</strong> Embossing, gold foil, and metallic textures.</li>
          <li>🌈 <strong>Holographic & Transparent Cards:</strong> Futuristic and eye-catching.</li>
        </ul>

        <h2 style={styles.sectionTitle}>🚀 The Future of Business Cards</h2>
        <p style={styles.text}>
          In the coming years, business cards will integrate **augmented reality (AR)**, 
          **AI-powered designs**, and **interactive elements** to create a more dynamic 
          networking experience.
        </p>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    backgroundColor: "#f4f4f4",
    margin:"30px 0"
  },
  hero: {
    backgroundColor: "#1E3A8A",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color:"white"
  },
  subtitle: {
    fontSize: "1.2rem",
    fontStyle: "italic",
  },
  content: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    marginTop: "-20px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#1E3A8A",
    borderBottom: "2px solid #ddd",
    paddingBottom: "5px",
    marginTop: "20px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#555",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0",
    fontSize: "1.1rem",
    color: "#555",
  },
};

export default BusinessCardTrends;
