import React from "react";
import "../components/Footer.css"; // We'll style it separately
import logo from "../assets/images/logo.png"; // Adjust the path if you place the logo elsewhere
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Social Media */}
        <div className="footer-logo-social">
          <img className="social-img" src={logo} alt="logo" />

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
              <SlSocialInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
              <SlSocialTwitter />
              
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
              <TiSocialFacebook />
            </a>
          </div>    
          
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div>
            <h3>Shop</h3>
            <ul>
              <li><a href="#">Shampoo</a></li>
              <li><a href="#">Facewash</a></li>
              <li><a href="#">Moisturizer</a></li>
              <li><a href="#">Sunscreen</a></li>
              <li><a href="#">Hair Serum</a></li>
            </ul>
          </div>

          <div>
            <h3>About</h3>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </div>

          <div>
            <h3>Policies</h3>
            <ul>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Credits */}
        <div className="footer-credits">
          © 2025 Glower | Designed by Godhani Technology.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
