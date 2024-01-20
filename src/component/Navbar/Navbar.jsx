import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import LogoImg from "../../assets/image/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="home" spy={true} smoth={true}>
            <img src={LogoImg} alt="logo" />
          </Link>
        </div>
        <nav className={`${showNav ? "active" : ""}`}>
          <ul className="nav">
            <li>
              <Link
                to="home"
                spy={true}
                duration={500}
                smoth={true}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="service"
                spy={true}
                duration={500}
                smoth={true}
                offset={-100}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                duration={500}
                smoth={true}
                offset={-100}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                spy={true}
                duration={500}
                smoth={true}
                offset={-100}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="team"
                spy={true}
                duration={500}
                smoth={true}
                offset={-100}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                duration={500}
                smoth={true}
                offset={-200}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="actionBtn">
            <a href="https://wa.me/2348163686235">
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <a href="tel:08163686235">
              <span>
                <FiPhone />
              </span>
            </a>
          </div>
        </nav>

        <div className="navburger" onClick={() => setShowNav(!showNav)}>
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
