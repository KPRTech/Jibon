import React from "react";
import WhatWeDo from "../../../src/components/WhatWeDo/WhatWeDo";
import HeroBanner from "../../components/HeroBanner";
import Advocacy from "../../components/Advocacy";
import Oraganizetion from "../../components/Organizetion";
import MakeDonation from "../../components/MakeDonation/MakeDonation";

const OurStoryPage = () => {
  return (
    <div>
      <HeroBanner
        title={`Our Story`}
        heroTextOne={`Our journey of reforming government schools to transform children's lives.`}
      ></HeroBanner>
      <WhatWeDo></WhatWeDo>
      <Advocacy></Advocacy>
      <Oraganizetion></Oraganizetion>
      <MakeDonation></MakeDonation>
    </div>
  );
};

export default OurStoryPage;
