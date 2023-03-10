import React from "react";
import ComigSoon from "../../assets/images/coming-soon.png";
import "./Tablets.scss";

export const Tablets: React.FC = () => {
  return (
    <section className="pageNotFound">
      <h1 hidden>Available soon</h1>
      <img className="pageNotFound__image" src={ComigSoon} alt="Page Not Found" />
    </section>
  );
};