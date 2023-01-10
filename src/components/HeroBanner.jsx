import React from "react";

const HeroBanner = ({ title, heroTextOne, heroTextTwo }) => {
  return (
    <div>
      <div
        className="mt-20 lg:mt-0 h-[280px] lg:h-[360px] relative"
        style={{
          background: 'url("/assets/images/aboutbg3.jpg") top center no-repeat',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black h-[280px] lg:h-[360px] bg-opacity-[.78]">
          <div className="relative z-20">
            <div className="text-center pt-[90px] lg:pt-[150px] pb-8">
              <div className="text-2xl lg:text-4xl text-white leading-7 font-mont font-medium">
                {title}
              </div>
              <br />
              <em className="text-[#999999] text-sm lg:text-base font-play leading-[16px] italic mx-10 lg:mx-0 block m-auto">
                {heroTextOne}
                <br />
                {heroTextTwo}
              </em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
