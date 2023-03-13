import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.scss";
import Home from "../../assets/icons/home.svg";

export const NavigationForFavorites: React.FC = memo(() => {
  const location = useLocation();
  const { pathname } = location;
  const phoneName = pathname.slice(pathname.lastIndexOf("/") + 1);
  const normalisedName = phoneName.replace(/-/g, " ").split(" ");

  const capitalizedName = normalisedName
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            <img className="navigation__link--home" src={Home} alt="Home" />
          </a>
        </li>

        {phoneName.length > 6 ? (
          <li className="navigation__item">{capitalizedName}</li>
        ) : null}
      </ul>
    </nav>
  );
});