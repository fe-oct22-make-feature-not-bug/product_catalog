import React from "react";
import "./ProductButtons.scss";

export const ProductButtons: React.FC = () => {
  return (
    <div className="product-buttons">
      <button className="addToCart text-button" type="submit">Add to cart</button>
      <button className="addToWishlist" type="submit">
        <span hidden>add to wishlist</span>
      </button>
    </div>
  );
};