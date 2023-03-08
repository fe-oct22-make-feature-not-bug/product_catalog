import React, { Dispatch, SetStateAction, memo } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.scss";
import like from "../../../assets/icons/like.png";
import bag from "../../../assets/icons/bag.png";

type Props = {
  burgerMenuActive: boolean;
  setBurgerMenuActive: Dispatch<SetStateAction<boolean>>;
};

export const BurgerMenu: React.FC<Props> = memo(
  ({ burgerMenuActive, setBurgerMenuActive }) => {
    return (
      <div className="container">
        <div className={cn("menu", { active: burgerMenuActive })}>
          <div className="menu__header">
            <button
              type="button"
              className="menu__close"
              onClick={() => setBurgerMenuActive(false)}
            >
              {true}
            </button>
          </div>

          <nav className="menu__nav">
            <ul className="menu__list">
              <li className="menu__item text-uppercase">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "menu__link menu__link--is--active is-active"
                      : "menu__link"
                  }
                  onClick={() => setBurgerMenuActive(false)}
                >
                  home
                </NavLink>
              </li>

              <li className="menu__item text-uppercase">
                <NavLink
                  to="/phones"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__link nav__link--is--active is-active"
                      : "menu__link"
                  }
                  onClick={() => setBurgerMenuActive(false)}
                >
                  phones
                </NavLink>
              </li>
              <li className="menu__item text-uppercase">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__link nav__link--is--active is-active"
                      : "menu__link"
                  }
                  onClick={() => setBurgerMenuActive(false)}
                >
                  tablets
                </NavLink>
              </li>
              <li className="menu__item text-uppercase">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    isActive
                      ? "menu__link menu__link--is--active is-active"
                      : "menu__link"
                  }
                  onClick={() => setBurgerMenuActive(false)}
                >
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="menu__likeAndBag">
            <div className="like">
              <NavLink to="/like" onClick={() => setBurgerMenuActive(false)}>
                <img src={like} alt="like" className="image" />
              </NavLink>
            </div>

            <div className="bag">
              <NavLink to="/bag" onClick={() => setBurgerMenuActive(false)}>
                <img src={bag} alt="bag" className="image" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
