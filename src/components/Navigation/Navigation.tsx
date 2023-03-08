/* eslint-disable no-console */
import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.scss";
import Home from "../../assets/icons/home.svg";

export const Navigation: React.FC = memo(() => {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="/">
            <img src={Home} alt="Home" />
          </a>
        </li>
        <li>
          <a href="/#/phones">Phones</a>
        </li>
      </ul>
    </nav>
  );
});
