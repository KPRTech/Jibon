import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <div>
      <button
        className={`uppercase text-white bg-primary text-xs font-mont py-2 px-3 rounded hover:bg-hoverPrimary linear duration-300 flex items-center ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
