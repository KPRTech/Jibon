import React from "react";

const MembershipCard = ({ title, desp, imgSrc }) => {
  return (
    <div>
      <div className="flex flex-col items-center text-white font-mont w-[100%] linear duration-300 hover:translate-y-[-5%]">
        <div className="bg-primary py-4 w-full">
          <p className="font-semibold">{title} </p>
          <p className="mt-2"> {desp}</p>
        </div>
        <picture className="w-full">
          <img src={imgSrc} className="w-[26vw] h-[17vw]" loading="lazy" />
        </picture>
      </div>
    </div>
  );
};

export default MembershipCard;
