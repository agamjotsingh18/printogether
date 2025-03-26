import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FaInstagram, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logoP.png";
import "../styles/Footer.css";
import ToastNotification from "./ToastNotification"; // Import the ToastNotification component

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Send POST request to /subscribe endpoint
    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.text())
      .then((data) => {
        setToastMessage(data); // Set the toast message
        setShowToast(true); // Show the toast
      })
      .catch((error) => {
        console.error("Error:", error);
        setToastMessage("Failed to subscribe. Please try again."); // Error message
        setShowToast(true); // Show the toast
      });
  };

  return (
    <Box className="footer">
      <Box className="footer-container">
        {/* Logo Section */}
        <Box className="footer-logo">
          <img src={logo} height="90px" alt="Print Fusion Logo" className="logo" />
        </Box>

        {/* Our Company */}
        <Box className="footer-column">
          <Typography className="footer-heading">Our Company</Typography>
          <a href="/about">About us</a>
          <a href="mailto:printfusionindia@gmail.com?subject=Job Application">Careers</a>
          <a href="/blog">Blog</a>

          {/* Newsletter Section */}
          <Box className="newsletter">
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
          </Box>
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
            <a href="tel:+919319042075"><FaPhoneAlt /> +91 9319042075</a>
          </Box>
          <Box className="contact-item">
            <a href="mailto:printfusionindia@gmail.com"><FaEnvelope /> printfusionindia@gmail.com</a>
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

          <Typography className="footer-heading">Follow us</Typography>
          <Box className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon linkedin" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="social-icon pinterest" />
            </a>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Typography className="footer-text">
        © 2025 <a href="/" className="footer-brand">Print Fusion</a>. All rights reserved.
      </Typography>

      {/* Toast Notification */}
      {showToast && (
        <ToastNotification
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </Box>
  );
};

export default Footer;