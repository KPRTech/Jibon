import React from "react";
import HeroBanner from "../../components/HeroBanner";
import PrimaryButton from "../../components/PrimaryButton";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";


const OurChaptersPage = () => {
  return (
    <div>
      {" "}
      <HeroBanner
        title={"Our Chapters"}
        heroTextOne={
          "Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Our Chapters"}></BreadCrumb>

      {/* main contents */}
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

          <div>
            <span className="mt-9 block mb-2 text-xl font-semibold mr-2">
              {" "}
              GOOGLE MAP/DIRECTIONS:
            </span>
            <div className="mt-5">
              <iframe
                className="w-full h-[22vw]"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231641.4894936536!2d67.075944!3d24.884393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1aba575efc771898!2sZindagi+Trust!5e0!3m2!1sen!2sus!4v1556114003583!5m2!1sen!2sus"
              ></iframe>

              {/* https://maps-generator.com/ */}
            </div>
          </div>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default OurChaptersPage;
