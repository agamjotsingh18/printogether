import React from "react";

const FutureOf3DPrinting = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>The Future of 3D Printing</h1>
        <p style={styles.subtitle}>
          Discover how 3D printing is transforming the manufacturing industry.
        </p>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>🚀 Revolutionizing Manufacturing</h2>
        <p style={styles.text}>
          3D printing is shifting the way industries manufacture products. From
          healthcare and aerospace to automotive and construction, 
          this technology is leading the way for faster, more efficient, and sustainable 
          production.
        </p>

        <h2 style={styles.sectionTitle}>🌍 Key Advancements</h2>
        <ul style={styles.list}>
          <li>🔬 <strong>Bioprinting:</strong> Creating human tissues and organs.</li>
          <li>🏗️ <strong>Construction:</strong> Printing entire buildings.</li>
          <li>🚗 <strong>Automotive:</strong> Lightweight and durable car parts.</li>
          <li>🚀 <strong>Aerospace:</strong> Complex components for spacecraft.</li>
        </ul>

        <h2 style={styles.sectionTitle}>🔮 The Road Ahead</h2>
        <p style={styles.text}>
          The future of 3D printing is promising. From mass customization to 
          sustainable production, it will redefine how products are made, making 
        manufacturing smarter, greener, and more efficient.
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
    backgroundColor: "#f9f9f9",
    margin: "40px 0"
  },
  hero: {
    backgroundColor: "#4A90E2",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
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
    color: "#4A90E2",
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

export default FutureOf3DPrinting;
