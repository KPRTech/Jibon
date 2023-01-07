import React from "react";

const Dropdown = ({ className, children }) => {
  return (
    <div
      className={`linear duration-300 hidden group-hover:block animate-[popDownY_.4s_ease_1] text-white lg:absolute  left-[-1vw] bg-[#1a1a1a] top-[4.7vw] border-t-2 border-solid border-[#ff6400] w-[50vw] lg:w-[17vw] py-3 z-50 drop-shadow-lg ${className}`}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default Dropdown;
