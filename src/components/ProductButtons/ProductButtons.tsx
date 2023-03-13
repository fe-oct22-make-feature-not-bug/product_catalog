import React, { useState, useEffect, useContext } from "react";
import cn from "classnames";
import { CreateContext } from "../../context/CreateContext";
import { Phone } from "../../types/Phone";
import "./ProductButtons.scss";

type Props = {
  phone: Phone;
};

export const ProductButtons: React.FC<Props> = ({ phone })=> {
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [buttonText, setButtonText] = useState('Add to cart');
  const { handleAddToCart } = useContext(CreateContext);
  const { isProductInCart } = useContext(CreateContext);

  const isInCart = isProductInCart(phone?.namespaceId);

  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText('Add to cart');
    }, 3000);

    return () => clearTimeout(timer);
  }, [buttonText]);

  const handleAddedToCart = () => {
    setButtonText('Added to cart');
  };

  const handleCombinedClick = () => {
    handleAddToCart(phone);
    handleAddedToCart();
  };

  return (
    <div className="product-buttons">
      <button
        className={cn("addToCart", "text-button", {
          "in-cart": isInCart,
        })}
        type="submit"
        onClick={handleCombinedClick}
      >
        {buttonText}
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
  );
};
