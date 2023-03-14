import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocalStorage } from "react-use";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { Card } from "../Card/Card";
import { NavigationForFavorites } from "../Navigation/NavigatioonForFavorites";
import "./Favorites.scss";

export const Favorites: React.FC = () => {
  const [favorite, setFavorite] = useLocalStorage<PhoneMainInfo[]>(
    "favorite",
    []
  );

  useEffect(() => {
    if (!favorite) {
      setFavorite([]);
    }
  }, [favorite, setFavorite]);

  return (
    <section className="favorites">
      <NavigationForFavorites />
      <h1 className="h1 favorites__title">Favourites</h1>
      <div className="favorites__counter">
        {favorite?.length}
        {favorite && favorite?.length < 2 ? " item" : " items"}
      </div>

      {!favorite?.length && (
        <div className="favorites__empty">
          <h2 className="h1 text-center">Your wish list is empty</h2>
        </div>
      )}

      {favorite?.length !== 0 && (
        <div className="favorites__container">
          <div className="favorites__items">
            {favorite?.map((phone) => (
              <div key={phone.id} className="favorites__item">
                <Card phone={phone} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
