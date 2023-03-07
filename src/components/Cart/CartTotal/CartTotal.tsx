import './CartTotal.scss';

export const CartTotal = () => {
  return (
    <div className="cart__total">
      <h1 className="cart__total-title">$999</h1>

      <h1 className="cart__total-subtitle">
        Total for 3 items
      </h1>

      <button 
        type="submit"
        className="cart__total-checkout">Checkout</button>
    </div>
  );
};