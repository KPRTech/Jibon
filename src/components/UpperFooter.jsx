import React from "react";
import PrimaryButton from "./PrimaryButton";

const UpperFooter = ({ children, className }) => {
  return (
    <div className="bg-[#FF6400]">
      {children}
      <div className="lg:mx-24 lg:pt-7 lg:pb-4 py-4 px-4 lg:flex lg:text-left text-center lg:justify-between">
        <div>
          <h2 className="text-2xl text-white font-normal tracking-wider">
            SCHEDULE A VISIT TO OUR MODEL SCHOOLS
          </h2>
          <h3 className="text-lg italic text-gray-50 ">
            Book a visit to our school to meet the students whose lives have
            been transformed.
          </h3>
        </div>
        <PrimaryButton
          className={`bg-[#FF934D] border border-white hover:bg-opacity-50 hover:bg-neutral-100`}
        >
          SCHEDULE NOW
        </PrimaryButton>
      </div>
    </div>
  );
};

export default UpperFooter;
