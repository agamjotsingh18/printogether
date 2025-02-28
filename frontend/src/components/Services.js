import React from "react";
import styles from "../styles/Services.module.css";

const servicesData = [
  {
    title: "Flex Printing",
    description: "High-quality flex printing with vibrant colors and durable materials.",
    image: "flex-printing.jpg",
  },
  {
    title: "Retail & Mall Branding",
    description: "Branding solutions for shopping malls and retail stores to increase visibility.",
    image: "branding.jpg",
  },
  {
    title: "Custom Merchandise",
    description: "Print on t-shirts, mugs, banners, and more for brand promotions.",
    image: "custom-merchandise.jpg",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={`/assets/${service.image}`} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
