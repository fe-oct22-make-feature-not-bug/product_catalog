/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/display-name */
// import { useLocalStorage } from "react-use";
import React, { useState, useContext } from "react";
import cn from "classnames";
import "./Card.scss";
import { Link } from "react-router-dom";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { CreateContext } from "../../context/CreateContext";

type Props = {
  phone: PhoneMainInfo;
};

export const Card: React.FC<Props> = ({ phone }) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const { cart, handleAddToCart } = useContext(CreateContext);
  const { isProductInCart } = useContext(CreateContext);

  console.log(cart);
  const  isInCart =  isProductInCart(phone.id);
  // useEffect(() => {
  //   // Check if phone is already in cart when component mounts
  //   if (cart) {
  //     const index = cart.findIndex((item) => item.id === phone.id);

  //     setIsInCart(index !== -1);
  //   }
  // }, [cart, phone]);


  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  return (
    <div className="phone-card">
      <Link to={`/phones-info/${phone.phoneId}`}>
        <div className="phone-card__image-container">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
            alt="phone"
            className="phone-card__image"
          />
        </div>

        <h3 className="phone-card__title text-body">{phone.name}</h3>
      </Link>

      <div className="phone-card__price-block">
        <p className="phone-card__price h3">${phone.price}</p>
        <p className="phone-card__price-discount">${phone.fullPrice}</p>
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
          className={`addToWishlist ${addedToFavorites === true ? "is-selected" : ""
            }`}
          type="submit"
          onClick={() => handleClick(addedToFavorites)}
        >
          <span hidden>add to wishlist</span>
        </button>
      </div>
    </div>
  );
};
