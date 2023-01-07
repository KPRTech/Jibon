import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecondarySlider.css"


const SecondarySlider = ({children}) => {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    className:"w-[100%]",
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
      <div className="">
        <img className="w-full" src={children.firstImageSrc} alt="" />
      </div>
      <div>
        <img className="w-full" src={children.secondImageSrc} alt="" /> 
      </div>
      <div>
        <img className="w-full" src={children.thirdImageSrc} alt="" />
      </div>
    </Slider>
    </div>
  );
};

export default SecondarySlider;
