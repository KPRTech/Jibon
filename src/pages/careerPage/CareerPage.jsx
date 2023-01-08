import React from "react";
import HeroBanner from "../../components/HeroBanner";
import PrimaryButton from "../../components/PrimaryButton";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";
import { BsPlusLg } from "react-icons/bs";

const CareerPage = () => {
  return (
    <div>
      {" "}
      <HeroBanner
        title={"Careers"}
        heroTextOne={"We are expanding our management team."}
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Careers"}></BreadCrumb>
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
        <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-xl font-bold pb-4 mb-4 border-b-2">
            Job Opportunities at Zindagi Trust
          </h2>
          <p className="font-rale text-slate-700 mt-2 mb-8">
            Click on job title to view its details.
          </p>

          <div>
            <div className="font-time">
              <p className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center">
                Academic Officer <BsPlusLg className="" />
              </p>
              <div className="p-4 border-[1px] text-slate-700 leading-7">
                <p>
                  About Zindagi Trust <br /> Zindagi Trust works on improving
                  the quality of education available to the average Pakistani
                  child through pilot projects in school reform and policy
                  advocacy. It has transformed two government schools in Karachi
                  into model institutions and used the success of its work there
                  to impact thousands of government schools through policy
                  changes in school governance, child protection, etc.
                  <br /> The Trust’s vision for a successful school is one that
                  produces well-rounded citizens, not just students who score
                  A’s. To this end, it focuses on making classroom learning fun
                  but also on developing strong co-curricular programs and on
                  opening minds to new life and career choices. It has groomed
                  national and regional champions and high achievers in chess,
                  football, art, science, and youth leadership. Crucially, it
                  has empowered young women – from a section of society where
                  they are still marginalized – to enter professional and public
                  life.
                  <br /> Purpose and Scope:
                  <br /> The primary role of the Academic Officer is to ensure
                  that high-quality education interventions are imparted at the
                  schools. The incumbent will be expected to work with data in
                  order to advise senior management based on data-driven
                  decisions and strategies to improve the overall learning of
                  students and staff members. Work closely with PD (Professional
                  Development) Team and administrators to ensure that all
                  aspects of the School’s academic programs are running
                  successfully and smoothly.
                  <br />
                  The incumbent will report directly to the Chief Academic
                  Officer at Zindagi Trust while working closely with the school
                  staff and professional development teams. <br />{" "}
                  Responsibilities:
                </p>
              </div>
            </div>
          </div>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default CareerPage;
