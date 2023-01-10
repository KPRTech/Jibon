import React from "react";
import ContactForm from "../contactForm/ContactForm";
import PrimaryButton from "../PrimaryButton";

const ContactDetails = () => {
  return (
    <div>
      <hr />
      <div className="lg:mx-24 mx-4 py-12">
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
          <div className="lg:w-[65%]">
            <h2 className="text-2xl pb-5 font-bold text-[#FF6400]">
              CONTACT DETAILS:
            </h2>
            <h3 className="leading-8 text-gray-700 text-[17px] tracking-normal">
              <span className="font-bold">Address:</span> Khatoon-e-Pakistan
              Government Girls School, Sir Ibrahim Haroon Jafar Road,
              Bahadurabad, Karachi, Karachi City, Sindh
            </h3>
            <h3 className="leading-8 text-gray-700 text-[17px] tracking-normal">
              <span className="font-bold">Phone:</span> 021-34911119
            </h3>
            <h3 className="leading-7 py-4 text-gray-700 text-[17px] tracking-normal">
              For queries, suggestions or contributions feel free to contact us
              at info@zindagitrust.org
            </h3>
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
          <ContactForm className={"lg:w-[35%]"} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
