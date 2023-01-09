import React from "react";
import HeroBanner from "../../components/HeroBanner";
import PrimaryButton from "../../components/PrimaryButton";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";

const ContactOfficePage = () => {
  return (
    <div>
      {" "}
      <HeroBanner
        title={"Contact Us"}
        heroTextOne={
          "Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Contact Us"}></BreadCrumb>
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
        <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-2xl text-primary font-bold pb-4 mb-4 border-b-2">
            ZINDAGI TRUST HEAD OFFICE
          </h2>
          <p className="font-rale text-slate-700 mt-2 mb-5">
            <span className="mb-1 mt-2 inline-block font-semibold mr-2">
              Office Address:
            </span>
            House # 8A, 3rd Street, Block 7/8, Alhamra Society near Amir Khusro
            Road, Karachi
            <br />
            <span className="mb-1 mt-2 inline-block font-semibold mr-2">
              {" "}
              Phone:
            </span>{" "}
            92-21- 34305614 - 6 / 111-111-439
            <br />
            <span className="mt-2 inline-block mb-2 font-semibold mr-2">
              {" "}
              Fax:
            </span>
            92-21- 34125617 <br />
            For queries, suggestions or contributions feel free to contact us at
            info@zindagitrust.org
          </p>

          <span className="mt-2 block mb-2 text-xl font-semibold mr-2">
            {" "}
            GOOGLE MAP/DIRECTIONS:
          </span>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default ContactOfficePage;
