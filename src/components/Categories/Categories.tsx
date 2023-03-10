import React from "react";
import "./Categories.scss";
import "../CategoryItem/CategoryItem.scss";

import Phones from "../../assets/images/Phones.png";
import Tablets from "../../assets/images/Tablets.png";
import Accessories from "../../assets/images/Accessories.png";

import { CategoryItem } from "../CategoryItem/CategoryItem";

export const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      <div className="category">
        <CategoryItem
          categoryImage={Phones}
          categoryImageAlt="Phones"
          categoryLink="/phones"
          categoryTitle="Phones"
          categoryCount={`${71} models`}
        />
      </div>

      <div className="category">
        <CategoryItem
          categoryImage={Tablets}
          categoryImageAlt="Tablets"
          categoryLink="/tablets"
          categoryTitle="Tablets"
          categoryCount="Available soon..."
        />
      </div>

      <div className="category">
        <CategoryItem
          categoryImage={Accessories}
          categoryImageAlt="Accessories"
          categoryLink="/accessories"
          categoryTitle="Accessories"
          categoryCount="Available soon..."
        />
      </div>
    </div>
  );
};
