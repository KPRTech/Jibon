import React from "react";

const MembershipCard = ({ title, desp, imgSrc }) => {
  return (
    <div className="flex flex-col items-center text-white font-mont lg:w-[30%] linear duration-300 hover:translate-y-[-5%]">
      <div className="bg-primary py-4 w-full">
        <p className="font-semibold">{title} </p>
        <p className="mt-2 text-sm"> {desp}</p>
      </div>
      <picture className="w-full">
        <img
          src={imgSrc}
          className="w-full lg:w-[26vw] lg:h-[17vw]"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default MembershipCard;
