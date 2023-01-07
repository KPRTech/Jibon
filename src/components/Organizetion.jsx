import React from "react";

const Organizetion = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-12 text-[#FF6400]">
        ORGANIZATION TIMELINE
      </h1>

      <div
        className="w-[1px] h-[35px] bg-[#dddddd] relative mx-auto mt-4 after:absolute after:block
      after:w-[11px] after:h-[11px] after:border-solid after:border-2 after:border-[#ff6400] after:rounded-full after:top-[100%] after:left-[-5px]"
      ></div>

      <div className="flex justify-center mt-2">
        <div>
          <img src="assets/images/orgtimeline.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Organizetion;
