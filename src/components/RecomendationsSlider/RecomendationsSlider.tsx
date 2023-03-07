import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecomendationsSlider.scss";
// import { Card } from "../Card/Card";

const recomendItems = ["1", "2", "3", "4", "5"];

export const RecomendationsSlider: React.FC = () => {
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

  return (
    <div className="recomendations">
      <Slider {...settings}>
        {recomendItems.map((item) => (
          <div key={item} className="recomendations__item">
            {/* <Card /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
