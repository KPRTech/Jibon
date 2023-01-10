import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const BeforeAfterSlider = ({ imgUrl1, imgUrl2 }) => {
  const FIRST_IMAGE = {
    imageUrl: imgUrl1,
  };
  const SECOND_IMAGE = {
    imageUrl: imgUrl2,
  };

  const delimiterIconStyles = {
    width: "40px",
    height: "40px",
    backgroundSize: "24px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "none",
    backgroundColor: "#fff",
    backgroundImage: "url('assets/images/beforeAfter slider/sliderIcon.png')",
  };

  return (
    <div className="relative overflow-hidden my-3">
      <div className="lg:w-[70%] m-auto lg:p-4 md:p-3 p-2">
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          withResizeFeel={true}
          delimiterIconStyles={delimiterIconStyles}
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
