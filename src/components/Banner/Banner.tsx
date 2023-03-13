/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
import bannerPhoto from "../../assets/images/Banner.png";
import bannerSmall from "../../assets/images/banner-small.png";
import banner2 from "../../assets/images/2.png";
import banner2_s from "../../assets/images/2_s.png";
import banner3 from "../../assets/images/3.png";
import banner3_s from "../../assets/images/3_s.png";

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
    responsive: [
      {
        breakpoint: 639,
        settings: {
          arrows: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i: number) => (
      <button key={i} className="custom-dot">
        {i + 1}
      </button>
    ),
  };

  return (
    <section className="banner">
      <Slider className="banner__slider" {...settings}>
        <div className="banner__photo-container">
          <picture>
            <source media="(max-width: 639px)" srcSet={bannerSmall} />
            <img className="banner__photo" src={bannerPhoto} alt="photo1" />
          </picture>
        </div>

        <div className="banner__photo-container">
          <picture>
            <source media="(max-width: 639px)" srcSet={banner2_s} />
            <img className="banner__photo" src={banner2} alt="photo2" />
          </picture>
        </div>

        <div className="banner__photo-container">
          <picture>
            <source media="(max-width: 639px)" srcSet={banner3_s} />
            <img className="banner__photo" src={banner3} alt="photo3" />
          </picture>
        </div>
      </Slider>
    </section>
  );
});
