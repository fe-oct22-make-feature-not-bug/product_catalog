/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
import bannerPhoto from "../../assets/images/Banner.png";

const CustomPrevArrow = memo((props: React.HTMLProps<HTMLDivElement>) => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
});

const CustomNextArrow = memo((props: React.HTMLProps<HTMLDivElement>) => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
});

export const Banner: React.FC = memo(() => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="banner">
      <Slider className="banner__slider" {...settings}>
        <img className="banner__photo" src={bannerPhoto} alt="photo1" />
        <img className="banner__photo" src={bannerPhoto} alt="photo2" />
        <img className="banner__photo" src={bannerPhoto} alt="photo3" />
        <img className="banner__photo" src={bannerPhoto} alt="photo4" />
      </Slider>
    </section>
  );
});
