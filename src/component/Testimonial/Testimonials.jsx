import React from "react";
import Auth1 from "../../assets/image/author-1.jpg";
import Auth2 from "../../assets/image/author-2.jpg";

const Testimonials = () => {
  return (
    <section className="Testimonials" data-aos="fade-up">
      <header className="ServiceHeading">
        <h3 className="global_h3">Customer Reviews</h3>
        <h1>Our Testimonials</h1>
        <p>
          <span>
            There are many variations of passages of Lorem Ipsum available,
          </span>
          <span> but the majority have suffered alteration in some form.</span>
        </p>
      </header>
      <div className="slider-section">
        <div className="slider" data-aos="fade-up-right">
          <div className="slider-text">
            <p>
              on the other hand denoun with righteous and disliks men who are
              beguiled demorae momentc blinded by desire that can Author
            </p>
          </div>
          <div className="slider-header">
            <div className="slider-img">
              <img src={Auth1} alt="person one" />
            </div>
            <div className="slider-name">
              <h2>John Doe</h2>
              <small>Graphic Design</small>
            </div>
          </div>
        </div>
        <div className="slider" data-aos="fade-up-left">
          <div className="slider-text">
            <p>
              on the other hand denoun with righteous and disliks men who are
              beguiled demorae momentc blinded by desire that can Author
            </p>
          </div>
          <div className="slider-header">
            <div className="slider-img">
              <img src={Auth2} alt="person two" />
            </div>
            <div className="slider-name">
              <h2>David Wall</h2>
              <small>Web Designer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
