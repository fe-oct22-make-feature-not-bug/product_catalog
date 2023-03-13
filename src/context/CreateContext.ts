import React from "react";

import { PhoneMainInfo } from "../types/PhoneMainInfo";

export interface CreateContextProps {
  handleAddToCart: (phone: any) => void;
  handleAddToFavorite: (phone: any) => void;
  cart: PhoneMainInfo[] | undefined;
  favorite: PhoneMainInfo [] | undefined;
  isProductInCart: (id: string) => boolean;
  isProductInFavorite: (id: string) => boolean;
}

export const CreateContext = React.createContext<CreateContextProps>({
  handleAddToCart: () => {},
  handleAddToFavorite: () => {},
  favorite: [],
  cart: [],
  isProductInCart: () => false,
  isProductInFavorite: () => false,
});
