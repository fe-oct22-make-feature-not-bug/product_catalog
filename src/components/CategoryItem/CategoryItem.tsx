import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';

type Props = {
  categoryImage: string;
  categoryImageAlt: string;
  categoryLink: string;
  categoryTitle: string;
  categoryCount: string;
};

export const CategoryItem: React.FC<Props> = ({
  categoryImage,
  categoryImageAlt,
  categoryLink,
  categoryTitle,
  categoryCount,
}) => {
  return (
    <div className='category-item'>

      <Link to={categoryLink} className='category-item__img'>
        <img
          src={categoryImage}
          alt={categoryImageAlt}
          className='img'
        />
      </Link>

      <h4 className='category-item__title h4'>
        <Link to={categoryLink}>
          {categoryTitle}
        </Link>
      </h4>

      <p className='category-item__count'>{categoryCount}</p>
    </div>
  );
};