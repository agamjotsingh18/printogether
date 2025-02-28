import React from "react";
import styles from "../styles/Portfolio.module.css";

const portfolioData = [
  {
    title: "ITC Branding",
    image: "itc-branding.jpg",
  },
  {
    title: "Nestlé Store Display",
    image: "nestle-store.jpg",
  },
  {
    title: "Dabur Flex Banners",
    image: "dabur-flex.jpg",
  },
  {
    title: "Retail Store Signage",
    image: "retail-signage.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h2>Our Portfolio</h2>
      <div className={styles.portfolioGrid}>
        {portfolioData.map((item, index) => (
          <div key={index} className={styles.portfolioCard}>
            <img src={`/assets/${item.image}`} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
