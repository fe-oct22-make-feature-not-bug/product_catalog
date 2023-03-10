/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocalStorage } from "react-use";
import { CartItem } from "../CartItem";
import "./CartPage.scss";
import { PhoneMainInfo } from "../../../types/PhoneMainInfo";

export const CartPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [cart, setCart] = useLocalStorage<PhoneMainInfo[]>("cart", []);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };


  useEffect(() => {
    if (!cart) {
      setCart([]);
    }
  }, [cart, setCart]);

  const handleQuantityIncrement = (id: string) => {
    const updatedCart = cart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  };

  const handleQuantityDecrement = (id: string) => {
    const updatedCart = cart?.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  };

  const calculateTotal = (): number => {
    if (cart) {
      console.log(cart);

      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }

    return 0;
  };

  const calculateAmount = (): number => {
    if (cart) {
      console.log(cart);

      return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return 0;
  };

  return (
    <section className="cart">
      <h1 className="cart__title h1">Cart</h1>
      {!cart?.length && (
        <div className="cart__empty">
          <h2 className="h1 text-center">Cart is empty</h2>
        </div>
      )}
      {cart?.length !== 0 && (
        <div className="cart__container">
        {cart?.map((phone) => (
          <div className="cart__items">
            <CartItem
              phone={phone}
              onQuantityIncrement={() => handleQuantityIncrement(phone.id)}
              onQuantityDecrement={() => handleQuantityDecrement(phone.id)}
            />
          </div>
        ))}

      <div className="cart__total">
        <h1 className="cart__total-title">${calculateTotal()}</h1>

        <h2 className="cart__total-subtitle">
          Total for {calculateAmount()} items
        </h2>

        <button
          type="submit" 
          className="cart__total-checkout"
          onClick={handleClick}
        >
          Checkout
        </button>
      </div>
    </div>
      )}
      <div className={`cart__modal ${isActive ? 'is-active' : ''}`}>
          <h3 className="text-center h3">Thank you for purchase</h3>
          <Link 
            to="/"
            className="cart__total-checkout"
            onClick={handleClearLocalStorage}
          >
            Continue shoping
          </Link>
      </div>
    </section>
    
  );
};
