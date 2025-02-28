import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Quality Printing, Exceptional Branding</h1>
        <p>Flex printing & branding solutions for top brands like ITC, Nestlé, and Dabur.</p>
        <a href="/contact" className={styles.ctaButton}>Get a Quote</a>
      </div>
    </section>
  );
};

export default Hero;
