import React from "react";
import { GrayGrid, UiDeck, Ayroui, LineIcons, Tailwind, EcoHtml } from "./Logo";

const Client = () => {
  return (
    <section className="Client">
      <header className="ServiceHeading">
        <h3 className="global_h3">our Clients</h3>
        <h1>Our Awesome Clients</h1>
      </header>
      <div className="grid-temp">
        <div className="client">
          <img src={GrayGrid} alt="GrayGrid" />
        </div>
        <div className="client">
          <img src={UiDeck} alt="UiDeck" />
        </div>
        <div className="client">
          <img src={Ayroui} alt="Ayroui" />
        </div>
        <div className="client">
          <img src={LineIcons} alt="LineIcon" />
        </div>
        <div className="client">
          <img src={Tailwind} alt="Tailwind css" />
        </div>
        <div className="client">
          <img src={EcoHtml} alt="Ecohtml" />
        </div>
      </div>
    </section>
  );
};

export default Client;
