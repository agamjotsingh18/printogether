import React from "react";
import { Box, Typography } from "@mui/material";
import { FaInstagram, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logoP.png";
import "../styles/Footer.css";

const Footer = () => {
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.041304849228!2d77.0484673150827!3d28.62803098241683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04f8b1f5f5f1%3A0x1b9f8b1f5f5f5f1!2sF-17%20Mohan%20Garden%2C%20Pipal%20Wala%20Rd%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1633083083083!5m2!1sen!2sin"
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
    </Box>
  );
};

export default Footer;
