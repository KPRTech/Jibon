import React from "react";

const DonationBenefitsCard = ({ title, desp, iconPath }) => {
  return (
    <div className="flex flex-col items-center text-secondary font-mont lg:w-[27%] linear duration-300 hover:scale-[105%]">
      <picture className="w-[9vw] lg:w-[3.5vw] mb-6">
        <img src={iconPath} className="" loading="lazy" />
      </picture>
      <div className=" py-4 w-full">
        <p className="font-semibold">{title} </p>
        <p className="mt-2 text-sm"> {desp}</p>
      </div>
    </div>
  );
};

export default DonationBenefitsCard;
