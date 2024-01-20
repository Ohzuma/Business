import React from "react";
import HeroImg from "../../assets/image/3.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="rh">
          <article>
            <h1>
              <span>we transform your digital ideas </span>
              <span>into reality With a team of skilled professionals</span>
            </h1>
            <p>
              As a leading provider of web services, we bring innovation,
              expertise, and a commitment to excellence to every project."
            </p>
            <div>
              <a href="tel:08163686235">
                <FiPhone />
                <span>CALL US</span>
              </a>

              <a href="https://wa.me/2348163686235">
                <FaWhatsapp />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
