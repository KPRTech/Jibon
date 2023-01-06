import React from "react";
import ShowBanner from "../components/ShowBanner";
import PrimarySlider from "../components/PrimarySlider";

const HomePage = () => {
  return (
    <div>
      <ShowBanner />
      {/* <div className="h-screen"></div> */}
      <PrimarySlider/>
    </div>
  )
};

export default HomePage;
