import React from "react";
import PrimaryButton from "../PrimaryButton";

const Content = ({ title, description, button }) => {
  return (
    <div className="w-[45%] p-10">
      <h2 className="font-mont text-[#FF6400] text-2xl font-bold">{title}</h2>
      <div className="mt-2 mb-2">
        <hr />
      </div>
      <p className="font-rale text-slate-700 text-base mt-2 leading-loose">{description}</p>
      {button && (<PrimaryButton children="DONATE NOW" className="mt-5"/>)}     
    </div>
  );
};

export default Content;
