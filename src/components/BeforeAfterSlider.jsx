import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AchievementHeader from "./AchievementHeader";

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
      <div className='absolute top-0 bottom-0 left-0 right-0 lg:h-[75%] h-[55%] w-full z-[-1] lg:skew-y-[-5deg] skew-y-[-2deg] origin-top-left brightness-50' style={{ background: 'url("/assets/images/banner1.jpg") no-repeat', backgroundSize: 'cover' }}></div>
      <div className="lg:w-[50%] md:w-[45%] m-auto lg:p-4 md:p-3 p-2">
        <div className="mb-8">
          <AchievementHeader
            className={"text-white"}
            achiveHeader="BEFORE AND AFTER"
            achiveDescription="Hold and slide right to see the school transform from before to after our intervention"
          />
        </div>
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
