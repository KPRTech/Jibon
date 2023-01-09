import React from "react";
import AchievementHeader from "../AchievementHeader";


const OurImpact = () => {
  return (
    <div className="mx-24">
      <AchievementHeader
        achiveHeader="OUR IMPACT"
        achiveDescription="Our impact includes revamped and new school facilities; individual student achievements in academics and beyond; the introduction of programs like art, sports and chess; student wellness initiatives such as breakfast, healthcare and counseling; teacher professional development; customised blended learning through software; and, most importantly, change in national and provincial education policy."
      />
      <div className="container grid grid-rows-1 lg:grid-cols-5 md:gap-2 sm:text-center md:grid-cols-2 grid-cols-1 lg:gap-4 gap-y-4 lg:py-12 py-4 px-4 ">
        <a href="https://www.zindagitrust.org/impact/infrastructure">
          <img src='assets/images/impact/impact-img1.jpg' alt="" />
        </a>
        <a href="https://www.zindagitrust.org/impact/governance">
          <img src='assets/images/impact/impact-img2.jpg' alt="" />
        </a>
        <a href="https://www.zindagitrust.org/impact/new-programs">
          <img src='assets/images/impact/impact-img3.jpg' alt="footer-img2" />
        </a>
        <a href="https://www.zindagitrust.org/impact/academics">
          <img src='assets/images/impact/impact-img4.jpg' alt="" />
        </a>
        <a href="https://www.zindagitrust.org/impact/policy">
          <img src='assets/images/impact/impact-img5.jpg' alt="" />
        </a>
      </div>
    </div>
  );
};

export default OurImpact;
