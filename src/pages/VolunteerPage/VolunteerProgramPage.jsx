import React from "react";

import HeroBanner from "../../components/HeroBanner";
import PrimaryButton from "../../components/PrimaryButton";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";
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
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
        <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-primary text-2xl font-bold mb-7">
            VOLUNTEER FOR ZINDAGI TRUST
          </h2>
          <p className="font-rale text-slate-700 mt-2 mb-8">
            150+ career talks, 1500 workshops, 2500+ students impacted
          </p>
          <p className="font-rale text-slate-700 mt-2 mb-8">
            Do you want to make a positive impact on the future of Pakistan? You
            can help transform the lives of Pakistani children.
          </p>
          <p className="font-rale text-slate-700 mt-2 mb-8">
            Join hands with Zindagi Trust. Become a Zindagi Trust volunteer
          </p>

          <PrimaryButton path="/volunteer-sign-up"> 
           Sign Up
          </PrimaryButton>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default VolunteerProgramPage;
