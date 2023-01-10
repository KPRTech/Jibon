import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
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
          <p className="font-rale text-secondary mt-2 mb-5">
            {" "}
            For queries, suggestions or contributions feel free to contact us at
            info@zindagitrust.org
          </p>
          <h2 className="font-mont text-2xl text-primary font-bold pb-3 mb-6 mt-5 border-b-2">
            ZINDAGI TRUST USA
          </h2>

          <p className="font-rale text-secondary mt-2 mb-5">
            {" "}
            Zindagi Trust Inc. is a non-profit 501 (c)3 registered organization
            within the United States of America. Your donations qualify as a tax
            deduction. Tax ID: 20-1287010.
          </p>
          <p className="font-rale text-secondary mt-2 mb-5">
            <span className="mb-1 mt-2 inline-block font-semibold mr-2">
              Office Address:
            </span>
            Zindagi Trust USA, 9406 Wickham Way, Orlando, FL 32836
            <br />
            <span className="mb-1 mt-2 inline-block font-semibold mr-2">
              {" "}
              Phone:
            </span>{" "}
            847-879-1020
            <br />
            <span className="mt-2 inline-block mb-2 font-semibold mr-2">
              {" "}
              Email:
            </span>
            zt_usa@zindagitrust.org
            <br />
            <span className="mt-7 inline-block mb-2 font-semibold mr-2">
              {" "}
              Director:
            </span>
            Mumtaz Mir
            <br />
            <span className="mt-2 inline-block mb-2 font-semibold mr-2">
              {" "}
              Email:
            </span>
            mir.mumtaz@gmail.com
            <br />
            <span className="mt-4 inline-block mb-2 font-semibold mr-2">
              {" "}
              Director (Voluntary Basis):
            </span>
            Khalid Qureishi
            <br />
            <span className="mt-2 inline-block mb-2 font-semibold mr-2">
              {" "}
              Email:
            </span>
            kq@zindagitrust.org
            <br />
          </p>
        </div>
        <ContactForm className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default OurChaptersPage;
