import React from "react";
import ComigSoon from "../../assets/images/coming-soon.png";
import "./Favorites.scss";

export const Favorites: React.FC = () => {
  return (
    <section className="favorites">
      <h1 hidden>Available soon</h1>
      <img className="favorites__image" src={ComigSoon} alt="Favorites" />
    </section>
  );
};
