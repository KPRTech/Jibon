import React from "react";
import AchievementHeader from "../../components/AchievementHeader";
import PrimaryButton from "../../components/PrimaryButton";

const OtherDonate = ({ id }) => {
  return (
    <div>
      {" "}
      <div id={id} className="mx-auto w-[85%] mt-10">
        <AchievementHeader achiveHeader="OTHER WAYS TO DONATE" />
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-16 my-10">
          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon1.png"
              alt=""
            />
            <h3 className="font-mont text-secondary/90 text-xl font-bold mt-6">
              CHEQUE
            </h3>
            <p className="ont-mont text-[#818181] font-thin mt-3">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-6" />
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
            <h3 className="font-mont text-secondary/90 text-xl font-bold mt-6">
              BANK DEPOSITS
            </h3>
            <p className="ont-mont text-[#818181] font-thin mt-3">
              Make a deposit or a direct bank transfer to our accounts.
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-6" />
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
            <h3 className="font-mont text-secondary/90 text-xl font-bold mt-6">
              GLOBAL GIVING
            </h3>
            <p className="ont-mont text-[#818181] font-thin mt-3">
              Send your donations by Global Giving.
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-6" />
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
            <h3 className="font-mont text-secondary/90 text-xl font-bold mt-6">
              DONOR PERFECT
            </h3>
            <p className="ont-mont text-[#818181] font-thin mt-3">
              Send your donations by Donor Perfect.
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-6" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>
          <div className="lg:w-[20%] text-center">
            <img
              className="mx-auto w-[120px]"
              src="/assets/images/newProgram/icon5.png"
              alt=""
            />
            <h3 className="font-mont text-secondary/90 text-xl font-bold mt-6">
              FEELING BLESSED
            </h3>
            <p className="ont-mont text-[#818181] font-thin mt-3">
              Send your donations by Feeling Blessed.
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-6" />
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
