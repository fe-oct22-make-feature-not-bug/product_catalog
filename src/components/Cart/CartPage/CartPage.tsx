import { CartItem } from "../CartItem";
import { CartTotal } from "../CartTotal";
import './CartPage.scss';

export const CartPage: React.FC = () => {
  return (
    <section className="cart">
      <h1 className="cart__title">Cart</h1>

      <div className="cart__container">
        <div className="cart__items">
          <CartItem />
        </div>

        <CartTotal />
      </div>
    </section>
  );
};