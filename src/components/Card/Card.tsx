/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/display-name */
import React, { memo } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import testPhoneImage from "../../assets/images/test-phone-image.png";
import { Phone } from "../../types/Phone";


type Props = {
  phone: Phone;
  showPhoneDetails: boolean;
  handleClick: (newValue: boolean) => void;
};

export const Card: React.FC<Props> = memo(({ phone, showPhoneDetails, handleClick}: Props) => {

  const handleClickDetails = () => {
    handleClick(!showPhoneDetails);
  };

  return (
    <div className="phone-card">
      <Link
        to="/phones"
        onClick={handleClickDetails}
      >
        <div className="phone-card__image-container">
          <img src={testPhoneImage} alt="phone" className="phone-card__image" />
        </div>

        <h3 className="phone-card__title">{phone.name}</h3>
      </Link>

      <div className="phone-card__price-block">
        <p className="phone-card__price h3">${phone.priceRegular}</p>
        <p className="phone-card__price-discount">${phone.priceDiscount}</p>
      </div>

      <div className="phone-card__divider"></div>

      <div className="phone-card__info">
        <div className="phone-card__details">
          <span className="phone-card__attribute">Screen</span>
          <span>{phone.screen}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">Capacity</span>
          <span>{phone.capacity}</span>
        </div>
        <div className="phone-card__details">
          <span className="phone-card__attribute">RAM</span>
          <span>{phone.ram}</span>
        </div>
      </div>

      <div className="phone-card__actions">
        <a className="phone-card__to-cart" href="#">
          Add to cart
        </a>
        <button type="submit" className="phone-card__to-favourite"></button>
      </div>
    </div>
  );
});
