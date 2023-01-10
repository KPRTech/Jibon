import React from "react";
import PrimaryButton from "../PrimaryButton";
import reCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ className }) => {
  const handleSubmitCaptcha = (token) => {
    document.getElementById("contact-form").submit();
  };

  return (
    <div
      className={`mb-20 font-mont text-secondary animate-[slideYTwo_1s_ease_1] ${className}`}
    >
      <h2 className="font-mont text-2xl font-bold pb-3 mb-6 mt-5 border-b-2">
        GENERAL INQUIRIES
      </h2>

      <p className="font-rale mt-2 mb-5 text-sm w-[95%]">
        {" "}
        Kindly fill following form to send your general inquiries.
      </p>
      <form
        className="flex flex-col gap-y-4 w-[95%]"
        id="contact-form"
        action="#"
        method="POST"
      >
        <input
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"text"}
          placeholder={"Name"}
          autoFocus
        />
        <input
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"email"}
          placeholder={"Email Address"}
        />
        <input
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"number"}
          placeholder={"Phone Number"}
        />
        <textarea
          className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
          type={"text"}
          rows={4}
          placeholder={"Enter your message"}
        />

        <reCAPTCHA />
        <PrimaryButton children={"Send"} />
      </form>
    </div>
  );
};

export default ContactForm;
