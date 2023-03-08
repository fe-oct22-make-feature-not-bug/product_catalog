import crossDelete from "../../../assets/icons/crossDelete.png";
import phonePic from "../../../assets/images/test-phone-image.png";
import minusItem from "../../../assets/icons/minusItem.svg";
import plusItem from "../../../assets/icons/plusItem.svg";
import "./cartItem.scss";

export const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item-phoneData">
        <button type="submit" className="cart__item-phoneData__delete">
          <img src={crossDelete} alt="crossDelete" />
        </button>
        <img
          src={phonePic}
          alt="phone"
          className="cart__item-phoneData__photo"
        />
        <p className="cart__item-phoneData__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>

      <div className="cart__item-price">
        <div className="cart__item-price__counter">
          <button type="submit" className="cart__item-price__counter-minus">
            <img src={minusItem} alt="minusItem" />
          </button>

          <p className="cart__item-price__counter-value">3</p>

          <button type="submit" className="cart__item-price__counter-plus">
            <img src={plusItem} alt="plusItem" />
          </button>
        </div>
        <h1 className="cart__item-price__value">$999</h1>
      </div>
    </div>
  );
};
