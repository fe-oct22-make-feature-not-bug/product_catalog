import React, { useState, useCallback, useContext } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import "./Header.scss";
import like from "../../assets/icons/like.png";
import bag from "../../assets/icons/bag.png";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { CreateContext } from "../../context/CreateContext";

export const Header: React.FC = React.memo(() => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const { cart } = useContext(CreateContext);
  const { favorite } = useContext(CreateContext);

  const toggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      setBurgerMenuActive((curr) => !curr);
    },
    []
  );

  return (
    <>
      <header className="header">
        <div className="header__container">
          <NavLink to="/" className="header__logo">
            <Logo />
          </NavLink>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item text-uppercase">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--is--active is-active"
                      : "nav__link"
                  }
                >
                  home
                </NavLink>
              </li>

              <li className="nav__item text-uppercase">
                <NavLink
                  to="/phones"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--is--active is-active"
                      : "nav__link"
                  }
                >
                  phones
                </NavLink>
              </li>
              <li className="nav__item text-uppercase">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--is--active is-active"
                      : "nav__link"
                  }
                >
                  tablets
                </NavLink>
              </li>
              <li className="nav__item text-uppercase">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__link nav__link--is--active is-active"
                      : "nav__link"
                  }
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__likeAndBag">
          <div className="like">
            <NavLink to="/favorites">
              <img src={like} alt="like" className="image" />
              {favorite && favorite.length > 0 && (
                <span className="like__counter">{favorite?.length}</span>
              )}
            </NavLink>
          </div>

          <div className="bag">
            <NavLink to="/cart">
              <img src={bag} alt="bag" className="image" />
              {cart && cart.length > 0 && (
                <span className="bag__counter">{cart?.length}</span>
              )}
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          className={cn("burger__menu", {
            menu__close: burgerMenuActive,
            active: !burgerMenuActive,
          })}
          onClick={(event) => toggle(event)}
        >
          {true}
        </button>

        <BurgerMenu
          burgerMenuActive={burgerMenuActive}
          setBurgerMenuActive={setBurgerMenuActive}
        />
      </header>
    </>
  );
});
