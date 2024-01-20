import React from "react";

import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <div className="social_link">
          <a href="/">
            {" "}
            <FaGithub />
          </a>{" "}
          <a href="https://github.com/Ohzuma">
            {" "}
            <FaTwitter />
          </a>{" "}
          <a href="">
            {" "}
            <FaInstagram />
          </a>
          <a href="/">
            {" "}
            <FaFacebook />
          </a>
        </div>
        {/* <ul className="ul_links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul> */}

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vero
          fugiat autem ea. Neque consequatur vero repellat culpa expedita modi?
        </p>
        <span>ohzuma @ 2024</span>
      </div>
    </div>
  );
};

export default Footer;
