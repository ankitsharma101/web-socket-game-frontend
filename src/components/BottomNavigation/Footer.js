import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a passionate team dedicated to taking your money away. There
            are many exciting games to put your money into to get good returns.
            So Gamble away!
          </p>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: ankitsharma101.exe@gmail.com</p>
          <p>Phone: +919134490577</p>
          <p>Jaipur, Rajasthan</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About </a>
            </li>
            <li>
              <a href="/services">Services </a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy </a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/game.ankitsharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-sharma-23aa2725a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/ankitsharma.exe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Game. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
