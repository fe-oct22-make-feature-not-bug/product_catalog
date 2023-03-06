import React, { memo } from "react";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import "./Phones.scss";

export const Phones: React.FC = memo(() => {
  return (
    <div>
      <ProductDetail />
    </div>
  );
});