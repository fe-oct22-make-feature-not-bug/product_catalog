/* eslint-disable no-console */
import React, { FC, useCallback } from "react";

import { useLocalStorage } from "react-use";
import { CreateContext } from "./CreateContext";

import { PhoneMainInfo } from "../types/PhoneMainInfo";

interface Props {
  children: JSX.Element;
}

export const CreateContextProvider: FC<Props> = React.memo(({ children }) => {
  const [cart, setCart] = useLocalStorage<PhoneMainInfo[]>("cart", []);

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

  const isProductInCart = useCallback(
    (phoneId: string) => cart?.some((item) => item.id === phoneId) || false,
    [cart]
  );

  const handleClearLocalStorage = () => {
    // localStorage.clear();
    setCart(() => []);
  };

  const contextValues = {
    cart,
    handleAddToCart,
    isProductInCart,
    handleClearLocalStorage,
  };

  return (
    <CreateContext.Provider value={contextValues}>
      {children}
    </CreateContext.Provider>
  );
});
//
