import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone } from "../../types/Phone";

type Props = {
  phone : Phone;
};

export const ImagesSlider: React.FC<Props> = ({ phone }) => {
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
      <div className="product__slider-img">
        <Slider arrows={false} asNavFor={nav2 ?? undefined} ref={slider1Ref}>
          {phone.images.map(image => (
            <div 
              className="product__image" 
              key={image}
            >
            <img
              className="product__image-item" 
              src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`} 
              alt="iphone" 
            />
          </div>
          ))}
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
          {phone.images.map(image => (
            <div 
              className="product__image-small"
              key={image}
            >
              <img
                className="product__image-item" 
                src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${image}`}
                alt="iphone" />
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
