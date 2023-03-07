import React, { useState } from "react";
import "./ProductButtons.scss";

export const ProductButtons: React.FC = () => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  return (
    <div className="product-buttons">
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
  );
};
