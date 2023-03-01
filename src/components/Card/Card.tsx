/* eslint-disable react/display-name */
import React, { memo } from "react";
import "./Card.scss";
import testPhoneImage from "../../assets/images/test-phone-image.png";

export const Card: React.FC = memo(() => {
  return (
    <div className="phone-card">
      <div className="phone-card__image-container">
        <img src={testPhoneImage} alt={"phone"} className="phone-card__image" />
      </div>

      <h3 className="phone-card__title">
        {"Apple iPhone 14 Pro 128GB Silver (MQ023)"}
      </h3>

      <p className="phone-card__price">{"$999"}</p>

      <div className="phone-card__divider"></div>

      <div className="phone-card__info">
        <div className="phone-card__details">
          <span className="phone-card__attribute">Screen</span>
          <span>{"6.7” OLED"}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">Capacity</span>
          <span>{"128 GB"}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">RAM</span>
          <span>{"6 GB"}</span>
        </div>
      </div>

      <div className="phone-card__actions">
        <a className="phone-card__to-cart" href="#">
          Add to cart
        </a>
        <button className="phone-card__to-favourite"></button>
      </div>
    </div>
  );
});
