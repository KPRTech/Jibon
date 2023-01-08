import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ breadCrumbText }) => {
  return (
    <div className="text-sm font-mont flex items-center mx-3 my-5 lg:mx-40 lg:my-10">
      <Link
        to="/"
        className="text-[#ff6400] hover:underline linear duration-300"
      >
        Home
      </Link>
      <span className="text-[#333] mx-1">»</span>
      <p className="text-[#333] text-[15px]">{breadCrumbText}</p>
    </div>
  );
};

export default BreadCrumb;
