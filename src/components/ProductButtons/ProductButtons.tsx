import React, { useState, useContext, useEffect } from "react";
import "./ProductButtons.scss";
import { Phone } from "../../types/Phone";
import { CreateContext } from "../../context/CreateContext";

type Props = {
  phone: Phone;
};

export const ProductButtons: React.FC<Props> = ({ phone }) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");
  const { handleAddToCart } = useContext(CreateContext);
  const { handleAddToFavorite } = useContext(CreateContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText("Add to cart");
    }, 3000);

    return () => clearTimeout(timer);
  }, [buttonText]);

  const handleAddedToCart = () => {
    setButtonText("Added to cart");
  };

  const handleCombinedClick = () => {
    handleAddToCart(phone);
    handleAddedToCart();
  };

  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  const handleAddToWishList = () => {
    handleAddToFavorite(phone);
    handleClick(addedToFavorites);
  };

  return (
    <div className="product-buttons">
      <button
        className="addToCart text-button"
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
        onClick={handleAddToWishList}
      >
        <span hidden>add to wishlist</span>
      </button>
    </div>
  );
};
