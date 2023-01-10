import React from "react";
import AchievementHeader from "../AchievementHeader";
import { Link } from "react-router-dom";



const OurImpact = () => {
  return (
    <div className="mx-24">
      <AchievementHeader
        achiveHeader="OUR IMPACT"
        achiveDescription="Our impact includes revamped and new school facilities; individual student achievements in academics and beyond; the introduction of programs like art, sports and chess; student wellness initiatives such as breakfast, healthcare and counseling; teacher professional development; customised blended learning through software; and, most importantly, change in national and provincial education policy."
      />
      <div className="container grid grid-rows-1 lg:grid-cols-5 md:gap-2 sm:text-center md:grid-cols-2 grid-cols-1 lg:gap-4 gap-y-4 lg:py-12 py-4 px-4 ">
        <Link to="/infrastructure">
          <img src='assets/images/impact/impact-img1.jpg' alt="" />
        </Link>
        <Link to="/governance">
          <img src='assets/images/impact/impact-img2.jpg' alt="" />
        </Link>
        <Link to="/impact/new-program">
          <img src='assets/images/impact/impact-img3.jpg' alt="footer-img2" />
        </Link>
        <Link to="/impact/academics">
          <img src='assets/images/impact/impact-img4.jpg' alt="" />
        </Link>
        <Link to="/impact/policy">
          <img src='assets/images/impact/impact-img5.jpg' alt="" />
        </Link>
      </div>
    </div>
  );
};

export default OurImpact;
