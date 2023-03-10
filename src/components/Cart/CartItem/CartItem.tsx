/* eslint-disable no-param-reassign */
import crossDelete from "../../../assets/icons/crossDelete.png";
import minusItem from "../../../assets/icons/minusItem.svg";
import plusItem from "../../../assets/icons/plusItem.svg";
import { PhoneMainInfo } from "../../../types/PhoneMainInfo";
import "./cartItem.scss";

type Props = {
  phone: PhoneMainInfo;
  onQuantityIncrement: () => void;
  onQuantityDecrement: () => void;
};

export const CartItem: React.FC<Props> = ({
  phone,
  onQuantityIncrement,
  onQuantityDecrement,
}) => {
  return (
    <div className="cart__item">
      <div className="cart__item-phoneData">
        <button type="submit" className="cart__item-phoneData__delete">
          <img src={crossDelete} alt="crossDelete" />
        </button>
        <img
          src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
          alt="phone"
          className="cart__item-phoneData__photo"
        />
        <p className="cart__item-phoneData__title">{phone.name}</p>
      </div>

      <div className="cart__item-price">
        <div className="cart__item-price__counter">
          <button
            type="submit"
            className="cart__item-price__counter-minus"
            onClick={onQuantityDecrement}
          >
            <img src={minusItem} alt="minusItem" />
          </button>

          <p className="cart__item-price__counter-value">{phone.quantity}</p>

          <button
            type="submit"
            className="cart__item-price__counter-plus"
            onClick={onQuantityIncrement}
          >
            <img src={plusItem} alt="plusItem" />
          </button>
        </div>
        <h1 className="cart__item-price__value">
          ${phone.price * phone.quantity}
        </h1>
      </div>
    </div>
  );
};
