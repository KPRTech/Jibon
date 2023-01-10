import React from "react";

const ContactForm = ({ className }) => {
  return (
    <div className={`mb-20 font-mont text-secondary ${className}`}>
      <h2 className="font-mont text-2xl font-bold pb-3 mb-6 mt-5 border-b-2">
        GENERAL INQUIRIES
      </h2>

      <p className="font-rale mt-2 mb-5">
        {" "}
        Kindly fill following form to send your general inquiries.
      </p>
      <form className="flex flex-col gap-y-9">
        <input className="px-4 py-3 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333]" />
      </form>
    </div>
  );
};

export default ContactForm;
