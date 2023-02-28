import React, { memo } from 'react';
import chevronUp from '../../public/icons/chevron-up.svg';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom';
import './Header.scss';
import like from '../../images/like.png';
import bag from '../../images/bag.png';

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Logo />
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                HOME
              </li>
              <li className="nav__item">
                PHONES
              </li>
              <li className="nav__item">
                TABLETS
              </li>
              <li className="nav__item">
                ACCESSORIES
              </li>
            </ul>
          </nav>

          <div className="image__likeAndBag">
            <img
              src={like}
              alt="like"
              className="image"
            />
          
            <div className="image__likeAndBag">
              <img
                src={bag}
                alt="bag"
                className="image"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}