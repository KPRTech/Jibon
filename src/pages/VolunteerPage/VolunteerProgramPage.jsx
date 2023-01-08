import React from "react";

import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
const VolunteerProgramPage = () => {
  return (
    <div>
      {" "}
      <HeroBanner
        title={"Volunteer Program"}
        heroTextOne={
          "Volunteer your time and help make a difference to the future of Pakistan."
        }
      ></HeroBanner>
      <BreadCrumb
        breadCrumbText={"Get Involved » Volunteer Program"}
      ></BreadCrumb>
    </div>
  );
};

export default VolunteerProgramPage;
