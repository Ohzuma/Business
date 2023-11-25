import React from "react";
import Logo from "../../assets/image/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-item">
          <img src={Logo} alt="Logo" />
          <p>
            Making the world a better place through constructing elegant
            hierarchies.{" "}
          </p>
          <p>
            <span>© 2024 Ayro UI.</span>
            <span> Designed and Developed by Ayro UI </span>
          </p>
        </div>
        <div className="footer-item">
          <header>
            <h1>solutions</h1>
          </header>
          <ul>
            <li>
              <a href="/">Marketing</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Commerce</a>
            </li>
            <li>
              <a href="/">Insight</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <header>
            <h1>Support</h1>
          </header>
          <ul>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Guide</a>
            </li>
            <li>
              <a href="/">Api Status</a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <header>
            <h1>Subscribe</h1>
          </header>
          <p>Subscribe to our newsletter for the latest updates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
