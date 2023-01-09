import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecondarySlider.css";

const SecondarySlider = ({ children, slideNo }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: { slideNo },
    autoplay: true,
    className: "w-[100%]",
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {children["image"].map((val) => {
          return (
            <div className="">
              <img className="w-full" src={val} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SecondarySlider;
