import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FaInstagram, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/printogether-logo-nb.png";
import logoMobile from "../assets/printogether-favicon.jpeg";
import "../styles/Footer.css";
import ToastNotification from "./ToastNotification";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.text())
      .then((data) => {
        setToastMessage(data);
        setShowToast(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMessage("Failed to subscribe. Please try again.");
        setShowToast(true);
      });
  };

  return (
    <Box className="footer">
      <Box className="footer-container">
        {/* Logo Section - Different logo for mobile */}
        <Box className="footer-logo-container">
          <picture>
            <source srcSet={logoMobile} media="(max-width: 768px)" />
            <img src={logo} alt="Print Fusion Logo" className="footer-logo" />
          </picture>
        </Box>

        {/* Our Company */}
        <Box className="footer-column">
          <Typography className="footer-heading">Our Company</Typography>
          <a href="/about">About us</a>
          <a href="mailto:printfusionindia@gmail.com?subject=Job Application">Careers</a>
          <a href="/blog">Blog</a>
        </Box>

        {/* Important Links */}
        <Box className="footer-column">
          <Typography className="footer-heading">Important Links</Typography>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/delivery-return">Delivery & Return Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
        </Box>

        {/* Contact Info & Social Media */}
        <Box className="footer-column contact-info">
          <Typography className="footer-heading">Contact</Typography>
          <Box className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:+919319042075">+91 9319042075</a>
          </Box>
          <Box className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:printfusionindia@gmail.com">printfusionindia@gmail.com</a>
          </Box>
          
          <Box className="map-container">
            <iframe
              title="Print Fusion Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.972890009255!2d77.04530989999999!3d28.6305746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05362adfb89b%3A0x8f8e3e7bb27db4d0!2sPrint%20Fusion!5e0!3m2!1sen!2sin!4v1741737484226!5m2!1sen!2sin" 
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>

        {/* Newsletter Section */}
        <Box className="footer-column newsletter-column">
          <Typography className="footer-heading">Subscribe to our Newsletter</Typography>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>

          <Typography className="footer-heading social-heading">Follow us</Typography>
          <Box className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="social-icon linkedin" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterestP className="social-icon pinterest" />
            </a>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Typography className="footer-text">
        © {new Date().getFullYear()} <a href="/" className="footer-brand">Print Fusion</a>. All rights reserved.
      </Typography>

      {/* Toast Notification */}
      <ToastNotification
        open={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
        severity={toastMessage.includes("subscribed") ? "success" : "error"}
      />
    </Box>
  );
};

export default Footer;