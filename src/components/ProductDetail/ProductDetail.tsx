import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import { ProductButtons } from "../ProductButtons/ProductButtons";
import "./ProductDetail.scss";
import { ImagesSlider } from "./ImagesSlider";
import { RecomendationsSlider } from "../RecomendationsSlider/RecomendationsSlider";
import { Phone } from "../../types/Phone";
import { client } from "../../utils/fetchClient";
import { Navigation } from "../Navigation/Navigation";

export const getPhone = (phoneId: string | undefined) => {
  return client.get<Phone>(`phones/${phoneId}`);
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

  return (
    <>
      <Navigation />
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
                <ImagesSlider />
              </div>
              <div className="product__form">
                <div className="product__form-label">
                  <p className="product__form-label-color text-small">
                    Available colors
                  </p>
                  <p className="product__form-label-id text-small">
                    {phone.id}
                  </p>
                </div>
                <ul className="product__form-color">
                  <li className="product__form-color-wrapper">
                    <Link
                      className="product__form-color-item product__form-color-item--pink"
                      to="/"
                    ></Link>
                  </li>
                  <li className="product__form-color-wrapper">
                    <Link
                      className="product__form-color-item product__form-color-item--green"
                      to="/"
                    ></Link>
                  </li>
                  <li className="product__form-color-wrapper">
                    <Link
                      className="product__form-color-item product__form-color-item--grey"
                      to="/"
                    ></Link>
                  </li>
                  <li className="product__form-color-wrapper">
                    <Link
                      className="product__form-color-item product__form-color-item--white"
                      to="/"
                    ></Link>
                  </li>
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
                        selectedCapacityButton === button.name
                          ? "is-active"
                          : ""
                      }`}
                      onClick={() => handleClick(index, button.name)}
                      onKeyUp={() => handleClick(index, button.name)}
                    >
                      {button.name}
                    </button>
                  ))}
                </div>
                <div className="product__form-price">
                  <span className="product__form-price-actual h2">$799</span>
                  <span className="product__form-price-old">$1199</span>
                </div>
                <div className="product__form-buttons">
                  <ProductButtons />
                </div>
                <div className="product__form-details">
                  <div className="product__form-item">
                    <p className="product__form-details-key">Screen</p>
                    <p className="product__form-details-values">6.5” OLED</p>
                  </div>
                  <div className="product__form-item">
                    <p className="product__form-details-key">Resolution</p>
                    <p className="product__form-details-values">2688x1242</p>
                  </div>
                  <div className="product__form-item">
                    <p className="product__form-details-key">Processor</p>
                    <p className="product__form-details-values">
                      Apple A12 Bionic
                    </p>
                  </div>
                  <div className="product__form-item">
                    <p className="product__form-details-key">RAM</p>
                    <p className="product__form-details-values">3 GB</p>
                  </div>
                </div>
              </div>
            </div>

            <article className="product__info">
              <div className="product__about">
                <h3 className="h3 product__about-header">About</h3>
                <h4 className="h4 product__about-title">
                  And then there was Pro
                </h4>
                <p className="product__about-text">
                  A transformative triple‑camera system that adds tons of
                  capability without complexity.
                  <br />
                  <br />
                  An unprecedented leap in battery life. And a mind‑blowing chip
                  that doubles down on machine learning and pushes the
                  boundaries of what a smartphone can do. Welcome to the first
                  iPhone powerful enough to be called Pro.
                </p>
                <h4 className="h4 product__about-title">Camera</h4>
                <p className="product__about-text">
                  Meet the first triple‑camera system to combine cutting‑edge
                  technology with the legendary simplicity of iPhone. Capture up
                  to four times more scene. Get beautiful images in drastically
                  lower light. Shoot the highest‑quality video in a smartphone —
                  then edit with the same tools you love for photos. You’ve
                  never shot with anything like it.
                </p>
                <h4 className="h4 product__about-title">
                  Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak
                  it. Love it.
                </h4>
                <p className="product__about-text">
                  iPhone 11 Pro lets you capture videos that are beautifully
                  true to life, with greater detail and smoother motion. Epic
                  processing power means it can shoot 4K video with extended
                  dynamic range and cinematic video stabilization — all at 60
                  fps. You get more creative control, too, with four times more
                  scene and powerful new editing tools to play with.
                </p>
              </div>
              <div className="product__specs">
                <h3 className="h3 product__specs-header">Tech specs</h3>
                <div className="product__specs-details">
                  <p className="product__specs-key">Screen</p>
                  <p className="product__specs-value">6.5” OLED</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Resolution</p>
                  <p className="product__specs-value">2688x1242</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Processor</p>
                  <p className="product__specs-value">Apple A12 Bionic</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">RAM</p>
                  <p className="product__specs-value">3 GB</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Built in memory</p>
                  <p className="product__specs-value">64 GB</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Camera</p>
                  <p className="product__specs-value">
                    12 Mp + 12 Mp + 12 Mp (Triple)
                  </p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Zoom</p>
                  <p className="product__specs-value">Optical, 2x</p>
                </div>
                <div className="product__specs-details">
                  <p className="product__specs-key">Cell</p>
                  <p className="product__specs-value">GSM, LTE, UMTS</p>
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
    </>
  );
};
