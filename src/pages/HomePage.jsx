import React from "react";
import OurWork from "../components/OurWork";
import ShowBanner from "../components/ShowBanner";
import UpperFooter from "../components/UpperFooter";
import SuccessStories from "./SuccessStories";
import BeforeAfterSlider from "../components/BeforeAfterSlider";


const HomePage = () => {
  return (
    <div>
      <ShowBanner />
      <OurWork />
      <SuccessStories />
      <BeforeAfterSlider />
      <UpperFooter
        upperTitle={"SCHEDULE A VISIT TO OUR MODEL SCHOOLS"}
        upperText={"Book a visit to our school to meet the students whose lives have been transformed."}
        upperBtn={"SCHEDULE NOW"}
      />
    </div>
  )
};

export default HomePage;
