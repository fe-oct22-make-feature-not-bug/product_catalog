import React from "react";
import ComigSoon from "../../assets/images/coming-soon.png";
import "./Tablets.scss";

export const Tablets: React.FC = () => {
  return (
    <section className="tablets">
      <h1 hidden>Available soon</h1>
      <img className="tablets__image" src={ComigSoon} alt="Tablets" />
    </section>
  );
};
