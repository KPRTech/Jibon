import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
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
      {/* main contents */}
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between ">
        <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-2xl text-primary font-bold pb-4 mb-4 border-b-2">
            ZINDAGI TRUST HEAD OFFICE
          </h2>
          <p className="font-rale text-secondary mt-2 mb-5">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.259101173472!2d67.07068191500339!3d24.88914218404042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec2e04edccd%3A0x31c6fa448211baee!2sKhatoon-e-Pakistan%20Fatima%20Jinnah%20Government%20Girls%20School!5e0!3m2!1sen!2s!4v1594903347711!5m2!1sen!2s"
              ></iframe>

              {/* https://maps-generator.com/ */}
            </div>
          </div>
        </div>
        <ContactForm className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default ContactOfficePage;
