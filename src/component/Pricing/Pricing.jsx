import React from "react";
import Item from "./PricingData";
const Pricing = () => {
  return (
    <div className="pricingSection" data-aos="fade-up">
      <header className="ServiceHeading">
        <h3 className="global_h3">Price Plan</h3>
        <h1>Pricing & Plans</h1>
      </header>
      <div className="priceList">
        {Item.map((item, i) => {
          const { heading, desc, amount, btn, li1, li2, li3, li4 } = item;
          return (
            <div className="pricing-box" key={i}>
              <div className="heading">
                <h1>{heading}</h1>
                <p>{desc}</p>
              </div>
              <div className="amount">
                <sup>$</sup>
                <span>{amount}</span>
                <sub>/mo</sub>
              </div>
              <button type="button">{btn}</button>
              <ul>
                <li>
                  <span></span>
                  {li1}
                </li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
