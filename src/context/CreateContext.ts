import React from 'react';

import { PhoneMainInfo } from "../types/PhoneMainInfo";

export interface CreateContextProps {
  handleAddToCart: (phone: any) => void;
  cart: PhoneMainInfo[] | undefined;
  isProductInCart: (id: string) => boolean;
}

export const CreateContext = React.createContext<CreateContextProps>({
  handleAddToCart: () => { },
  cart: [],
  isProductInCart: () => false,
});