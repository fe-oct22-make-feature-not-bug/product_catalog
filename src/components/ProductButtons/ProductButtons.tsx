import React, { useState, useContext } from "react";
import "./ProductButtons.scss";
import { Phone } from '../../types/Phone';
import { CreateContext } from "../../context/CreateContext";

type Props = {
  phone: Phone,
};

export const ProductButtons: React.FC<Props> = ({ phone }) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const { handleAddToCart } = useContext(CreateContext);

  const handleClick = (selected: boolean) => {
    if (selected === false) {
      setAddedToFavorites(true);
    } else {
      setAddedToFavorites(false);
    }
  };

  return (
    <div className="product-buttons">
      <button className="addToCart text-button" type="submit" onClick={() => handleAddToCart(phone)}>
        Add to cart
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
  );
};
