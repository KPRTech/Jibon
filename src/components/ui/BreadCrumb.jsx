import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ breadCrumbText, className }) => {
  return (
    <div className="text-sm font-mont flex mx-3 my-5 lg:ml-24 lg:my-10">
      <Link
        to="/"
        className="text-[#ff6400] hover:underline linear duration-300"
      >
        Home
      </Link>
      <span className="text-[#333] mx-1">»</span>
      <p className={`text-[#333] text-[15px] ${className}`}>{breadCrumbText}</p>
    </div>
  );
};

export default BreadCrumb;
