import React from "react";

const EcoFriendlyPrintingSolutions = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Eco-Friendly Printing Solutions</h1>
        <p style={styles.subtitle}>
          Discover sustainable printing methods that help save the environment.
        </p>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>🌱 Why Eco-Friendly Printing?</h2>
        <p style={styles.text}>
          Traditional printing methods consume a lot of energy and produce harmful 
          waste. Eco-friendly printing focuses on **reducing pollution**, **saving 
          resources**, and **minimizing carbon footprint**.
        </p>

        <h2 style={styles.sectionTitle}>♻️ Sustainable Printing Techniques</h2>
        <ul style={styles.list}>
          <li>🌿 <strong>Recycled Paper:</strong> Reduces deforestation and saves water.</li>
          <li>🖨️ <strong>Eco-Friendly Ink:</strong> Made from soy or vegetable-based ingredients.</li>
          <li>⚡ <strong>Energy-Efficient Printers:</strong> Use less power and reduce emissions.</li>
          <li>📦 <strong>Minimal Packaging:</strong> Reduces plastic waste and promotes biodegradability.</li>
        </ul>

        <h2 style={styles.sectionTitle}>🌍 The Future of Green Printing</h2>
        <p style={styles.text}>
          With **technological advancements**, the printing industry is shifting 
          towards **greener alternatives**. Innovations like **biodegradable 
          filaments, waterless printing, and carbon-neutral production** are shaping 
          the future of sustainable printing.
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
    margin:"30px 0"
  },
  hero: {
    backgroundColor: "#2E7D32",
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
    color: "#2E7D32",
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

export default EcoFriendlyPrintingSolutions;
