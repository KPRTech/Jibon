import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <div>
      <button
        className={`uppercase text-white bg-[#FF6400] text-xs font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
