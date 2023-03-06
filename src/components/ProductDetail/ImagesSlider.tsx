import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import iphone from "../../assets/images/iphone-temporary1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImagesSlider: React.FC = () => {
  
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const slider1Ref = useRef<Slider>(new Slider({}));
  const slider2Ref = useRef<Slider>(new Slider({}));


  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      setNav1(slider1Ref.current);
      setNav2(slider2Ref.current);
    }
  }, []);
  
  return (
    <>
      <div className="product__slider-img" >
        <Slider arrows={false} asNavFor={nav2 ?? undefined} ref={slider1Ref}>
          <div className="product__image">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
        </Slider>
      </div>
      
      <div className="product__slider-nav">
        <Slider
          arrows={false}
          asNavFor={nav1 ?? undefined}
          ref={slider2Ref}
          slidesToShow={5}
          swipeToSlide
          focusOnSelect
        >
          <div className="product__image-small">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image-small">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image-small">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image-small">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
          <div className="product__image-small">
            <img className="product__image-item" src={iphone} alt="iphone" />
          </div>
        </Slider>
      </div>
    </>
  );
};