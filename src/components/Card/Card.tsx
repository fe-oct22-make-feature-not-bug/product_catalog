/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/display-name */
import React, { memo, useState } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { Phone } from "../../types/Phone";

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = memo(({ phone }) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  return (
    <div className="phone-card">
      <Link to={`/phones/${phone.id}`}>
        <div className="phone-card__image-container">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.images[0]}`}
            alt="phone"
            className="phone-card__image"
          />
        </div>

        <h3 className="phone-card__title text-body">{phone.name}</h3>
      </Link>

      <div className="phone-card__price-block">
        <p className="phone-card__price h3">${phone.priceDiscount}</p>
        <p className="phone-card__price-discount">${phone.priceRegular}</p>
      </div>

      <div className="phone-card__divider"></div>

      <div className="phone-card__info">
        <div className="phone-card__details">
          <span className="phone-card__attribute">Screen</span>
          <span>{phone.screen}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">Capacity</span>
          <span>{phone.capacity}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">RAM</span>
          <span>{phone.ram}</span>
        </div>
      </div>

      <div className="phone-card__actions">
        <button className="addToCart text-button" type="submit">
          Add to cart
        </button>
        <button
          className={`addToWishlist ${
            addedToFavorites === true ? "is-selected" : ""
          }`}
          type="submit"
          onClick={() => handleClick(addedToFavorites)}
        >
          <span hidden>add to wishlist</span>
        </button>
      </div>
    </div>
  );
});
