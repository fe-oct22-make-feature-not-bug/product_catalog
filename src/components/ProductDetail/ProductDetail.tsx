import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import { ProductButtons } from "../ProductButtons/ProductButtons";
import "./ProductDetail.scss";
import { ImagesSlider } from "./ImagesSlider";
import { RecomendationsSlider } from "../RecomendationsSlider/RecomendationsSlider";
import { Phone } from "../../types/Phone";
import { client } from "../../utils/fetchClient";

export const getPhone = (phoneId: string | undefined) => {
  return client.get<Phone>(`phones-info/${phoneId}`);
};

interface CapacityButton {
  name: string;
  isActive: boolean;
}

export const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState<Phone>();
  const { phoneId } = useParams();
  const [selectedCapacityButton, setSelectedCapacityButton] = useState<
    string | null
  >(null);
  const [capacityButtons, setCapacityButtons] = useState<CapacityButton[]>([
    { name: "64GB", isActive: false },
    { name: "256GB", isActive: false },
    { name: "512GB", isActive: false },
  ]);

  function handleGoBack() {
    navigate(-1);
  }

  const handleClick = (index: number, name: string) => {
    const newButtons = [...capacityButtons];

    newButtons[index].isActive = !newButtons[index].isActive;
    setCapacityButtons(newButtons);

    if (selectedCapacityButton === name) {
      setSelectedCapacityButton(null);
    } else {
      setSelectedCapacityButton(name);
    }
  };

  useEffect(() => {
    getPhone(phoneId)
      .then(setPhone)
      .catch(() => {
        // showError();
      });
  }, []);


  const description1 = { ...phone?.description[0] };
  const description2 = { ...phone?.description[1] };
  const description3 = { ...phone?.description[2] };
  
  return (
    <section className="product">
      {phone && (
        <>
          <div className="product__toBack">
            <button
              type="submit"
              className="product__toBack-button"
              onClick={handleGoBack}
            >
              <img
                className="product__toBack-icon"
                src={chevronLeft}
                alt="back"
              />
              <span className="product__toBack-label">back</span>
            </button>
          </div>
          <h2 className="h2 product__header">{phone.name}</h2>
          <div className="product__wrapper">
            <div className="product__slider-wrapper">
              <ImagesSlider phone={phone}/>
            </div>
            <div className="product__form">
              <div className="product__form-label">
                <p className="product__form-label-color text-small">
                  Available colors
                </p>
                <p className="product__form-label-id text-small">ID: 802390</p>
              </div>
              <ul className="product__form-color">
                {phone.colorsAvailable.map((el) => (
                  <li className="product__form-color-wrapper">
                    <Link
                      key={el}
                      className={`product__form-color-item product__form-color-item--${el}`}
                      to={`${el}`}
                    ></Link>
                  </li>
                ))}
              </ul>
              <p className="text-small product__form-capacity-label">
                Select capacity
              </p>
              <div className="product__form-capacity-btn">
                {capacityButtons.map((button, index) => (
                  <button
                    key={button.name}
                    type="submit"
                    className={`product__form-capacity-item ${
                      selectedCapacityButton === button.name ? "is-active" : ""
                    }`}
                    onClick={() => handleClick(index, button.name)}
                    onKeyUp={() => handleClick(index, button.name)}
                  >
                    {button.name}
                  </button>
                ))}
              </div>
              <div className="product__form-price">
                <span className="product__form-price-actual h2">
                  {phone.priceDiscount}
                </span>
                <span className="product__form-price-old">
                  {phone.priceRegular}
                </span>
              </div>
              <div className="product__form-buttons">
                <ProductButtons />
              </div>
              <div className="product__form-details">
                <div className="product__form-item">
                  <p className="product__form-details-key">Screen</p>
                  <p className="product__form-details-values">{phone.screen}</p>
                </div>
                <div className="product__form-item">
                  <p className="product__form-details-key">Resolution</p>
                  <p className="product__form-details-values">
                    {phone.resolution}
                  </p>
                </div>
                <div className="product__form-item">
                  <p className="product__form-details-key">Processor</p>
                  <p className="product__form-details-values">
                    {phone.processor}
                  </p>
                </div>
                <div className="product__form-item">
                  <p className="product__form-details-key">RAM</p>
                  <p className="product__form-details-values">{phone.ram}</p>
                </div>
              </div>
            </div>
          </div>
          <article className="product__info">
            <div className="product__about">
              <h3 className="h3 product__about-header">About</h3>
              <h4 className="h4 product__about-title">
                {description1.title}
              </h4>
              <p className="product__about-text">
                {description1.text}
              </p>
              <h4 className="h4 product__about-title">{description2.title}</h4>
              <p className="product__about-text">
                {description2.text}
              </p>
              <h4 className="h4 product__about-title">
                {description3.title}
              </h4>
              <p className="product__about-text">
                {description3.text}
              </p>
            </div>
            <div className="product__specs">
              <h3 className="h3 product__specs-header">Tech specs</h3>
              <div className="product__specs-details">
                <p className="product__specs-key">Screen</p>
                <p className="product__specs-value">{phone.screen}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Resolution</p>
                <p className="product__specs-value">{phone.resolution}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Processor</p>
                <p className="product__specs-value">{phone.processor}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">RAM</p>
                <p className="product__specs-value">{phone.ram}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Built in memory</p>
                <p className="product__specs-value">{phone.capacity}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Camera</p>
                <p className="product__specs-value">{phone.camera}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Zoom</p>
                <p className="product__specs-value">{phone.zoom}</p>
              </div>
              <div className="product__specs-details">
                <p className="product__specs-key">Cell</p>
                <p className="product__specs-value">{phone.cell.join(", ")}</p>
              </div>
            </div>
          </article>

          <div className="product__recomendations">
            <h2 className="h2 product__recomendations-header">
              You may also like
            </h2>
            <RecomendationsSlider />
          </div>
        </>
      )}
    </section>
  );
};
