import React from "react";
import ComigSoon from "../../assets/images/coming-soon.png";
import "./Accessories.scss";

export const Accessories: React.FC = () => {
  return (
    <section className="accessories">
      <h1 hidden>Available soon</h1>
      <img className="accessories__image" src={ComigSoon} alt="Accessories" />
    </section>
  );
};
