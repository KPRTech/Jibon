import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ title, imgSrc, description }) => {
  return (
    <div className="w-full animate-[slideYTwo_1s_ease_1]">
      <div>
        <Link to={"#"} className="relative">
          {/* <div className="w-[91%] absolute top-[-.8vw] left-[-.7vw] z-[-2] h-[5vw] bg-gradient-to-b from-[#FF6400] to-[#b74900]"></div> */}
          <img src={imgSrc} alt="DonationCard" />
        </Link>
        <div className="w-[90%] text-justify">
          <h1 className="text-[#333333] font-mont font-bold leading-5 my-3">
            {title}
          </h1>
          <p className="text-[#333] text-xs font-mont leading-[25px]">
            {description}
          </p>
          <button className="font-mont text-sm text-[#ff6400] font-bold mt-3">
            Donate Now »
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
