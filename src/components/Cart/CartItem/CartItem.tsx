/* eslint-disable no-param-reassign */
import { Link } from "react-router-dom";
import crossDelete from "../../../assets/icons/crossDelete.png";
import minusItem from "../../../assets/icons/minusItem.svg";
import plusItem from "../../../assets/icons/plusItem.svg";
import { PhoneMainInfo } from "../../../types/PhoneMainInfo";
import "./cartItem.scss";

type Props = {
  phone: PhoneMainInfo;
  onQuantityIncrement: () => void;
  onQuantityDecrement: () => void;
  handleRemoveItem: (id: string) => void;
};

export const CartItem: React.FC<Props> = ({
  phone,
  onQuantityIncrement,
  onQuantityDecrement,
  handleRemoveItem,
}) => {
  // eslint-disable-next-line no-console
  console.log(phone);

  return (
    <div className="cart__item">
      <div className="cart__item-phoneData">
        <button
          type="submit"
          className="cart__item-phoneData__delete"
          onClick={() => handleRemoveItem(phone.id)}
        >
          <img src={crossDelete} alt="crossDelete" />
        </button>
        <Link
          className="cart__item-wrapper"
          to={`/phones-info/${phone.phoneId}`}
        >
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${phone.image}`}
            alt="phone"
            className="cart__item-phoneData__photo"
          />
          <p className="cart__item-phoneData__title">{phone.name}</p>
        </Link>
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
          ${phone.priceDiscount * phone.quantity}
        </h1>
      </div>
    </div>
  );
};
