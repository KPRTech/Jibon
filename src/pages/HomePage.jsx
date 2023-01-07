import React from "react";
import ShowBanner from "../components/ShowBanner";
import PrimaryButton from "../components/PrimaryButton";
import UpperFooter from "../components/UpperFooter";
import PrimarySlider from "../components/PrimarySlider";
import BankDetails from "../components/ui/BankDetails";

const HomePage = () => {
  return (
    <div>
        <ShowBanner />
        <PrimarySlider />
        <BankDetails></BankDetails>
        <div>
          <UpperFooter>
          <div className="lg:mx-24 lg:pt-7 lg:pb-4 py-4 px-4 lg:flex lg:text-left text-center lg:justify-between">
            <div>
              <h2 className='text-2xl text-white font-normal tracking-wider'>SCHEDULE A VISIT TO OUR MODEL SCHOOLS</h2>
              <h3 className='text-lg italic text-gray-50 '>Book a visit to our school to meet the students whose lives have been transformed.</h3>
            </div>
            <PrimaryButton className={`bg-[#FF934D] border border-white hover:bg-opacity-50 hover:bg-neutral-100`}> <a href="https://www.zindagitrust.org/schedule-a-schooltour">SCHEDULE NOW</a></PrimaryButton>
          </div>
          </UpperFooter>
      </div>
    </div>
  )
};

export default HomePage;
