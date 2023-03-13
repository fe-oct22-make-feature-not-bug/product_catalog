import React from "react";
// import axios from 'axios';
import "./Categories.scss";
import "../CategoryItem/CategoryItem.scss";
// import { client } from "../../utils/fetchClient";
// import { PhoneMainInfo } from "../../types/PhoneMainInfo";

import Phones from "../../assets/images/Phones.png";
import Tablets from "../../assets/images/Tablets.png";
import Accessories from "../../assets/images/Accessories.png";
// import { getPhones } from '../RecomendationsSlider/RecomendationsSlider';

import { CategoryItem } from "../CategoryItem/CategoryItem";

export const Categories: React.FC = () => {
  // const [phonesLength, setPhonesLength] = useState(0);

  // useEffect(() => {
  //   client.get("phones/")
  //     .then(response => {
  //       setPhonesLength(response.data.length);
  //     });
  // }, []);

  return (
    <div className="categories-container">
      <div className="category">
        <CategoryItem
          categoryImage={Phones}
          categoryImageAlt="Phones"
          categoryLink="/phones"
          categoryTitle="Phones"
          categoryCount={`${95} phones`}
        />
      </div>

      <div className="category">
        <CategoryItem
          categoryImage={Tablets}
          categoryImageAlt="Tablets"
          categoryLink="/tablets"
          categoryTitle="Tablets"
          categoryCount="Almost there!"
        />
      </div>

      <div className="category">
        <CategoryItem
          categoryImage={Accessories}
          categoryImageAlt="Accessories"
          categoryLink="/accessories"
          categoryTitle="Accessories"
          categoryCount="Arriving tomorrow!"
        />
      </div>
    </div>
  );
};
