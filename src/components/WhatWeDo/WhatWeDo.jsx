import React from "react";
// import img1 from "../../../public/assets/images/schoolreform-1.png";

const WhatWeDo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-12 text-[#FF6400]">
        WHAT WE DO
      </h1>
      <p className="text-center lg:px-4 mt-5 p-4">
        Our work in School Reform transformed two government schools in Karachi
        into model institutions through interventions in infrastructure
        upgrades, governance, administration, teacher professional development,
        academic innovation and tracking and a rich menu of co-curricular and
        extra-curricular activities.
      </p>

      <div className="bg-gray-200  mt-14 lg:flex justify-center">
        <div className="lg:pt-10 lg:pb-14 lg:w-[30%]  p-4">
          <img src="/assets/images/schoolreform-1.png" alt="" />

          <h1 className="text-4xl sm:text-3xl font-bold mt-5">SCHOOL REFORM</h1>
          <p className="my-5 leading-loose">
            Our work in School Reform transformed two government schools in
            Karachi into model institutions through interventions in
            infrastructure upgrades, governance, administration, teacher
            professional development, academic innovation and tracking and a
            rich menu of co-curricular and extra-curricular activities.
          </p>

          <button className="px-2 py-1 text-white text-[14px] bg-[#FF6400] rounded">
            READ MORE
          </button>
        </div>

        <div className="lg:py-10 lg:w-[60%]">
          <div className="lg:pt-8">
            <img
              src="/assets/images/ourstory1.png"
              className="w-[100%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
