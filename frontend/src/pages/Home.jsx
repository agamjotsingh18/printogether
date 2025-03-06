import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <div className={styles.hero}>
        <img
          src="https://source.unsplash.com/1600x600"
          alt="Printing Banner"
        />
        <div className={styles.heroOverlay}>
          <h1>Welcome to Print Fusion</h1>
          <p>Your one-stop solution for high-quality printing and branding.</p>
          <a href="/services" className={styles.ctaBtn}>Explore Services</a>
        </div>
      </div>

      {/* ✅ Services Section */}
      <div className={styles.services}>
        <div className={styles.serviceCard}>
          <img src="https://source.unsplash.com/400x300/?business,card" alt="Business Cards"/>
          <h3>Business Cards</h3>
          <p>Premium quality business cards to leave a lasting impression.</p>
        </div>

        <div className={styles.serviceCard}>
          <img src="https://source.unsplash.com/400x300/?flyers,printing" alt="Flyers"/>
          <h3>Flyers & Brochures</h3>
          <p>Eye-catching marketing materials for your business.</p>
        </div>

        <div className={styles.serviceCard}>
          <img src="https://source.unsplash.com/400x300/?tshirt,printing" alt="T-Shirt Printing"/>
          <h3>Custom T-Shirts</h3>
          <p>Get custom-printed t-shirts for your brand or events.</p>
        </div>

        <div className={styles.serviceCard}>
          <img src="https://source.unsplash.com/400x300/?mug,printing" alt="Mug Printing"/>
          <h3>Custom Mugs</h3>
          <p>Personalized mugs with your brand or design.</p>
        </div>
      </div>

      {/* ✅ CTA Section */}
      <div className={styles.cta}>
        <h2>Get Started with Print Fusion</h2>
        <p>Order your custom prints today!</p>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Home;
