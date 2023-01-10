import React from "react";
import AchievementHeader from "../../components/AchievementHeader";
import PrimaryButton from "../../components/PrimaryButton";

const OtherDonate = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto w-[70%] mt-10">
        <AchievementHeader achiveHeader="OTHER WAYS TO DONATE" />
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 mt-10 mb-10">
          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon1.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon2.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon3.jpg"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon4.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDonate;
