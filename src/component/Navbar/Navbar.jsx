import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import LogoImg from "../../assets/image/white-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <nav>
          <div className="logo">
            <img src={LogoImg} alt="logo" />
          </div>
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
        </nav>
        <div className="navburger">
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
