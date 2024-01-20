import React from "react";
import Data from "./Items.js";
import MadeImg from "../../assets/image/b6.jpg";

const Testimonials = () => {
  return (
    <section className="Blog">
      <header className="ServiceHeading">
        <h3 className="global_h3">Lastes News</h3>
        <h1>Latest News & Blog</h1>
      </header>

      <div className="Blog-section">
        {Data.map((items) => {
          const { title, desc, img, id } = items;

          return (
            <div className="blog-item" key={id}>
              <div className="Blog-img">
                <img src={img} alt={title} />

                <div className="madeby">
                  <p>BY TIM NORTON</p>
                  <img src={MadeImg} alt={title} />
                </div>
              </div>

              <div className="Blog-text">
                <a href="http://blog.com">{title}</a>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
