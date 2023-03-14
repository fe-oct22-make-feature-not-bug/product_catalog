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
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1.8,
        },
      },

      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getPhones()
      .then((data) => {
        // eslint-disable-next-line no-return-assign, no-param-reassign
        data.map((item) => (item.quantity = 1));
        setPhones(data);
      })
      .catch(() => {
        setPhones([]);
      });
  }, []);

  return (
    <div className="recomendations">
      <Slider {...settings}>
        {phones.map((phone) => (
          <div key={phone.id} className="recomendations__item">
            <Card phone={phone} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
