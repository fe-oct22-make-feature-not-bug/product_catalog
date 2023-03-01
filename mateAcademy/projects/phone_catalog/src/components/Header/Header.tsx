import React, { memo } from 'react';
import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import './BurgerMenu/BurgerMenu'
import like from '../../images/like.png';
import bag from '../../images/bag.png';
import menu from '../../images/menu.png';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';


export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <NavLink
            to="/"
            className="header__logo"
          >
            <Logo />
          </NavLink>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive 
                    ? 'nav__link nav__link--is--active is-active' 
                    : 'nav__link')}
                >
                  home
                </NavLink>
              </li>
              
              <li className="nav__item">
                <NavLink
                  to="/phones"
                  className={({ isActive }) => (isActive 
                    ? 'nav__link nav__link--is--active is-active' 
                    : 'nav__link')}
                >
                  phones
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) => (isActive 
                    ? 'nav__link nav__link--is--active is-active' 
                    : 'nav__link')}
                >
                  tablets
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) => (isActive 
                    ? 'nav__link nav__link--is--active is-active' 
                    : 'nav__link')}
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__likeAndBag">
          
          <div className="like">
            <NavLink
              to="/like"
            >
              <img
                src={like}
                alt="like"
                className="image"
              />
            </NavLink>
          </div>

          <div className="bag"> 
            <NavLink
              to="/bag"
            >
              <img
                src={bag}
                alt="bag"
                className="image"
              />
            </NavLink>
          </div>
        </div> 

        <div className="burger__menu">
          <a href="#menu">
            <img 
              src={menu} 
              alt="menu" 
            />
          </a>
        </div>
      </header>
      
      <BurgerMenu />
    </>
  )
}