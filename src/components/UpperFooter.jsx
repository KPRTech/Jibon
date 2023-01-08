import React from "react";
import PrimaryButton from "./PrimaryButton";

const UpperFooter = ({ className, upperTitle, upperText, upperBtn }) => {
  return (
    <div>
      <div className="bg-[#FF6400]">
        <div className="lg:mx-24 pt-12 pb-8 lg:pt-7 lg:pb-4 py-4 px-4 lg:flex lg:text-left text-center lg:justify-between">
          <div>
            <h2 className='lg:text-2xl text-md font-mont text-white font-normal tracking-wider'>{upperTitle}</h2>
            <h3 className='lg:text-lg text-sm font-play italic text-gray-50 '>{upperText}</h3>
          </div>
          <PrimaryButton className={`bg-[#FF934D] border mx-auto mt-4 border-white hover:bg-opacity-50 hover:bg-neutral-100`}> <a href="https://www.zindagitrust.org/schedule-a-schooltour">{upperBtn}</a></PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
