import React from "react";
import AchievementHeader from "../../components/AchievementHeader";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import { FaLock } from "react-icons/fa";

const MembershipPage = () => {
  return (
    <div>
      <HeroBanner
        title={"Membership"}
        heroTextOne={
          "Join our community of monthly donors and help reform public education across Pakistan."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Membership"}></BreadCrumb>
      {/* main contents */}
      <div className="flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between">
        <div
          className="pt-5 pb-20 w-full bg-cover no-repeat !text-white"
          style={{
            background: "url(/assets/images/memberBanner.jpg)",
            backgroundSize: "",
            backgroundPosition: "center",
          }}
        >
          <AchievementHeader
            achiveHeader="Join our community"
            className={"text-white"}
          />

          <div className="lg:container flex justify-center lg:justify-end">
            <div className="w-4/5 lg:w-[30%] text-center">
              <h2 className="font-mont text-2xl text-white font-semibold pb-3 mb-6 mt-5">
                Join our community of monthly donors and help reform public
                education across Pakistan
              </h2>
              <div className="p-5 bg-white font-rale font-semibold text-secondary ">
                <p className="border-b-[1px] pb-3">
                  Choose Your Monthly Contribution
                </p>
                <div className="border-b-[1px] pb-4">
                  <div className="flex flex-wrap gap-x-3 mt-4 justify-around">
                    <button
                      className={`text-white font-normal bg-primary text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                    >
                      $10
                    </button>
                    <button
                      className={`text-primary hover:text-white font-normal bg-[#808080]/30 text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                    >
                      $10
                    </button>
                    <button
                      className={`text-primary hover:text-white font-normal bg-[#808080]/30 text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                    >
                      $10
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-x-3 mt-4 justify-between">
                    <button
                      className={`text-primary hover:text-white font-normal bg-[#808080]/30 text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                    >
                      $10
                    </button>
                    <button
                      className={`w-[64%] flex justify-center text-primary hover:text-white font-normal bg-[#808080]/30 text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                    >
                      Other Amount
                    </button>
                  </div>
                  <button
                    className={`uppercase flex justify-center w-full mt-3 text-white font-normal bg-primary text-base font-mont py-4 px-10 rounded hover:bg-hoverPrimary linear duration-300 flex items-center`}
                  >
                    Donate Monthly
                  </button>
                </div>
                <p className="text-sm font-normal">
                  $10 sponsors one month of classes for a student at our
                  reformed government schools.
                </p>
              </div>
              <p className="text-xs text-secondary/80 font-normal flex items-center justify-center gap-x-1 mt-1">
                <FaLock /> This is a secure SSL encrypted payment
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between"></div>
    </div>
  );
};

export default MembershipPage;
