import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ href, linkName, className, linkClass, children }) => {
  return (
    <li
      className={`group relative h-full flex hover:block hover:lg:flex items-center ${className}`}
    >
      <NavLink
        className={`linear duration-300 lg:after:h-[2px] after:w-full after:absolute after:bg-[#ff6400] after:linear after:duration-300 after:top-[4.7vw] group-hover:after:top-[3.4vw] after:right-0 after:opacity-0 group-hover:after:opacity-100 font-mont text-[10.7px] uppercase ${
          linkClass ? linkClass : ""
        }`}
        to={href}
        disabled
      >
        {linkName}
      </NavLink>
      {children}
    </li>
  );
};

export default NavItem;
