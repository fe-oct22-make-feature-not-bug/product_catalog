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
  // const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = (phone: any) => {
    if (cart) {
      const index = cart.findIndex((item: any) => item.id === phone.id);

      if (index === -1) {
        setCart([...cart, phone]);
      } else {
        const updatedCart = [...cart];

        updatedCart.splice(index, 1);
        setCart(updatedCart);
      }
    }
  };

  const isProductInCart = useCallback(
    (phoneId: string) => cart?.some((item) => item.id === phoneId) || false,
    [cart]
  );

  const contextValues = {
    cart,
    handleAddToCart,
    isProductInCart,
  };

  return (
    <CreateContext.Provider value={contextValues}>
      {children}
    </CreateContext.Provider>
  );
});
//
