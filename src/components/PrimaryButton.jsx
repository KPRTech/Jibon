import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, className, path }) => {
  return (
    <div>
      <Link to={path}>
        <button
          className={`uppercase text-white bg-[#FF6400] text-xs font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center ${className}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
