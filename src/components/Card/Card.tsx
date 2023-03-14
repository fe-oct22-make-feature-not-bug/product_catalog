/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/display-name */
// import { useLocalStorage } from "react-use";
import React, { useContext } from "react";
import cn from "classnames";
import "./Card.scss";
import { Link } from "react-router-dom";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { CreateContext } from "../../context/CreateContext";

type Props = {
  phone: PhoneMainInfo;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    handleAddToCart,
    isProductInCart,
    handleAddToFavorite,
    isProductInFavorite,
  } = useContext(CreateContext);

  const isInCart = isProductInCart(phone.id);
  const isInFavorite = isProductInFavorite(phone.id);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="phone-card">
      <Link to={`/phones-info/${phone.phoneId}`}>
        <div
          className="phone-card__image-container"
          onClick={scrollToTop}
          onKeyUp={scrollToTop}
          role="button"
          tabIndex={0}
        >
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
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
        <button
          type="submit"
          className={cn("addToCart", "text-button", {
            "in-cart": isInCart,
          })}
          onClick={() => handleAddToCart(phone)}
        >
          {isInCart ? "Added to cart" : "Add to cart"}
        </button>

        <button
          className={cn("addToWishlist", {
            "is-selected": isInFavorite,
          })}
          type="submit"
          onClick={() => handleAddToFavorite(phone)}
        >
          <span hidden>add to wishlist</span>
        </button>
      </div>
    </div>
  );
};
