import React from "react";
import AchievementHeader from "./AchievementHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import PrimaryButton from "./PrimaryButton";

const BeforeAfterSchoolReform = () => {
  return (
    <div className="relative lg:h-[600px] border overflow-hidden">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 lg:h-[75%] h-[55%] w-full z-[-1] lg:skew-y-[-5deg] skew-y-[-2deg] origin-top-left brightness-50"
        style={{
          background: 'url("/assets/images/banner1.jpg") no-repeat',
          backgroundSize: "cover",
        }}
      ></div>
      <AchievementHeader
        className={"text-white"}
        classDesp={"text-white"}
        achiveHeader="BEFORE AND AFTER TRANSFORMATION OF SCHOOLS"
        achiveDescription="Hold and slide right to see the school transform from before to after our intervention"
      />

      <div className="flex justify-center lg:w-[100%] m-auto text-center">
        <div className="w-4/5">
          <BeforeAfterSlider
            classBeforeAfter={"lg:w-4/5"}
            imgUrl1="https://www.zindagitrust.org/img/sections/school1.jpg"
            imgUrl2="https://www.zindagitrust.org/img/sections/school2new.jpg"
          />
          <p className=" font-semibold mb-2">
            SMB Fatima Jinnah Government Girls School
          </p>
          <div className="flex justify-center">
            <PrimaryButton children="VIEW ALL BEFORE AND AFTER GALLERY" />
          </div>
        </div>
        <div className="w-4/5">
          <BeforeAfterSlider
            classBeforeAfter={"lg:w-4/5"}
            imgUrl1="https://www.zindagitrust.org/img/sections/smbschool1.jpg"
            imgUrl2="https://www.zindagitrust.org/img/sections/smbschool2.jpg"
          />
          <p className=" font-semibold mb-2">
            Khatoon-e-Pakistan Government Girls School
          </p>
          <div className="flex justify-center">
            <PrimaryButton children="VIEW ALL BEFORE AND AFTER GALLERY" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSchoolReform;
