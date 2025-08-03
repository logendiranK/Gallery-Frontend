import React from "react";
import "./Styles/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-brand">
          <img src="../src/assets/color-pallete.png" />
          <h1>Logendiran's Gallery</h1>
          <p>Expressing creativity through color, canvas.</p>
        </div>
        <div className="footer-section-contact">
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:logu@example.com">logu@example.com</a>
          </p>
        </div>
        <div className="footer-section-socials">
          <h4>Follow Me</h4>

          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="bi bi-instagram"></i>
            <h6>Instagram</h6>
          </a>

          <a
            href="https://www.facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="bi bi-facebook"></i>
            <h6>Facebook</h6>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
