import React from 'react';
import './Categories.scss';
import '../CategoryItem/CategoryItem.scss';

import Phones from '../../assets/images/Phones.png';
import Tablets from '../../assets/images/Tablets.png';
import Accessories from '../../assets/images/Accessories.png';

import { CategoryItem } from '../CategoryItem/CategoryItem';

export const Categories: React.FC = () => {
  return (
    <div className='categories-container'>
      <div className='category'>
        <CategoryItem
          categoryImage={Phones}
          categoryImageAlt="Phones"
          categoryLink="/phones"
          categoryTitle="Phones"
          categoryCount={`${95} phones`}
        />
      </div>
      
      <div className='category'>
      <CategoryItem
        categoryImage={Tablets}
        categoryImageAlt="Tablets"
        categoryLink="/tablets"
        categoryTitle="Tablets"
        categoryCount={`${24} tablets`}
      />
      </div>

      <div className='category'>
      <CategoryItem
        categoryImage={Accessories}
        categoryImageAlt="Accessories"
        categoryLink="/accessories"
        categoryTitle="Accessories"
        categoryCount={`${100} accessories`}
      />
      </div>
    </div>
  );
};