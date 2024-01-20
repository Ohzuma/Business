import React from "react";
import ServiceData from "./ServiceData";
const Service = () => {
  return (
    <section className="ServiceSection">
      <header className="ServiceHeading">
        <h3 className="global_h3">Service</h3>
        <h1>Our Best Service</h1>
      </header>
      <div className="ServiceBoxes">
        {ServiceData.map((item, i) => {
          const { icon, heading, description } = item;
          return (
            <div className="box" key={i}>
              <div className="icons">{icon}</div>
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
