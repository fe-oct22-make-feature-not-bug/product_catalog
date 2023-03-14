/* eslint-disable no-console */
import React, { FC, useCallback } from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocalStorage } from "react-use";
import { CreateContext } from "./CreateContext";

import { PhoneMainInfo } from "../types/PhoneMainInfo";

interface Props {
  children: JSX.Element;
}

export const CreateContextProvider: FC<Props> = React.memo(({ children }) => {
  const [cart, setCart] = useLocalStorage<PhoneMainInfo[]>("cart", []);
  const [favorite, setFavorite] = useLocalStorage<PhoneMainInfo[]>(
    "favorite",
    []
  );

  const handleAddToCart = (phone: PhoneMainInfo) => {
    if (cart) {
      const indexInCart = cart.findIndex(
        (item: PhoneMainInfo) => item.id === phone.id
      );

      if (indexInCart === -1) {
        setCart([...cart, phone]);
      } else {
        const updatedCart = [...cart];

        updatedCart.splice(indexInCart, 1);
        setCart(updatedCart);
      }
    }
  };

  const handleAddToFavorite = (phone: PhoneMainInfo) => {
    if (favorite) {
      const indexInFavorite = favorite.findIndex(
        (item: PhoneMainInfo) => item.id === phone.id
      );

      if (indexInFavorite === -1) {
        setFavorite([...favorite, phone]);
      } else {
        const updatedFavorite = [...favorite];

        updatedFavorite.splice(indexInFavorite, 1);
        setFavorite(updatedFavorite);
      }
    }
  };

  const isProductInCart = useCallback(
    (phoneId: string) => cart?.some((item) => item.id === phoneId) || false,
    [cart]
  );

  const isProductInFavorite = useCallback(
    (phoneId: string) => favorite?.some((item) => item.id === phoneId) || false,
    [favorite]
  );
  const handleClearLocalStorage = () => {
    setCart(() => []);
  };

  const contextValues = {
    cart,
    favorite,
    handleAddToCart,
    handleAddToFavorite,
    isProductInCart,
    isProductInFavorite,
    handleClearLocalStorage,
  };

  return (
    <CreateContext.Provider value={contextValues}>
      {children}
    </CreateContext.Provider>
  );
});
//
