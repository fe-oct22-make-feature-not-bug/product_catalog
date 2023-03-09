import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { client } from "../../utils/fetchClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecomendationsSlider.scss";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { Card } from "../Card/Card";

export const getPhones = () => {
  return client.get<PhoneMainInfo[]>("phones/newPhones ");
};

export const RecomendationsSlider: React.FC = () => {
  const [phones, setPhones] = useState<PhoneMainInfo[]>([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch(() => {
        setPhones([]);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="recomendations">
      <Slider {...settings}>
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="recomendations__item"
            onClick={scrollToTop}
            onKeyUp={scrollToTop}
            role="button"
            tabIndex={0}
          >
            <Card phone={phone} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
