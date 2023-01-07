import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AchievementHeader from "./AchievementHeader";

const BeforeAfterSlider = () => {
  const FIRST_IMAGE = {
    imageUrl: "https://www.zindagitrust.org/img/sections/school1.jpg",
  };
  const SECOND_IMAGE = {
    imageUrl: "https://www.zindagitrust.org/img/sections/school2new.jpg",
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
    <div className="relative">
      <AchievementHeader
        achiveHeader="BEFORE AND AFTER"
        achiveDescription="Hold and slide right to see the school transform from before to after our intervention"
      />
      <div className="lg:w-[55%] md:w-[60%] m-auto lg:p-4 md:p-3 p-2">
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
