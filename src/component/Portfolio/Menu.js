import React from "react";

const Menu = ({ item }) => {
  return (
    <div className="Menu-section">
      {item.map((items) => {
        const { title, desc, img, id } = items;

        return (
          <div className="work" key={id} data-aos="fade-up">
            <div className="filter-img">
              <img src={img} alt={title} />
            </div>

            <div className="filter-text">
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
