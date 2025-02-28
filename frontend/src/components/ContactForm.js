import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Get in touch with us for your printing and branding needs!</p>

      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Business Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Reach Us At</h3>
          <p><strong>📍 Address:</strong> Mohan Garden, New Delhi</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>✉️ Email:</strong> contact@printfusion.com</p>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">🔵 Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">🔴 Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">🔵 LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
