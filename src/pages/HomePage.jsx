import React from "react";
import OurWork from "../components/OurWork";
import ShowBanner from "../components/ShowBanner";
import UpperFooter from "../components/UpperFooter";
import BankDetails from "../components/ui/BankDetails";
import OurImpact from "../components/ui/OurImpact";
import FeaturePrograms from "../components/ui/FeaturePrograms";
import SuccessStories from "./SuccessStories";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import MakeDonation from "../components/MakeDonation/MakeDonation";
import NewsStories from "../components/NewsStories";
import AchievementHeader from "../components/AchievementHeader";




const HomePage = () => {
  return (
    <div>
      <ShowBanner />
      <OurWork />
      <MakeDonation />
      <OurImpact />
      <FeaturePrograms />
      <NewsStories
        newsImg1={"assets/images/NewsEvents/newsStories1.png"}
        newsDate1={"7/9/2022"}
        newsTitle1={'ZINDAGI TRUST LAUNCHES "CODING PROGRAM" IN COLLABORATION WITH KFC & TECHNOKNOWLEDGE'}
        newsDescription1={"In collaboration with KFC Mitao Bhook, Zindagi Trust is piloting a three-year Coding Program in their two adopted government schools- SMB Fatima Jinnah and Khatoon-e-Pakistan to equip students from grades 3 to 8 with digital programming tools and modern t"}
        newsImg2={"assets/images/NewsEvents/newsStories2.png"}
        newsDate2={"23/8/2022"}
        newsTitle2={'TIKTOK, ZINDAGI TRUST INITIATE DIGITAL SAFETY WORKSHOPS IN GOVT SCHOOLS'}
        newsDescription2={"Famous video sharing app TikTok, in collaboration with Zindagi Trust, has initiated a series of workshops across their network of government schools in a bid to create awareness around digital safety among students, teachers and parents."}
        newsImg3={"assets/images/NewsEvents/newsStories3.png"}
        newsDate3={"21/7/2022"}
        newsTitle3={'CHILD PROTECTION AND DIGITAL SAFETY DIALOGUE ORGANIZED BY ZINDAGI TRUST IN COLLABORATION WITH META'}
        newsDescription3={"Zindagi Trust in collaboration with Meta (Facebook) hosted a roundtable discussion at GECE Hussainabad to identify ways to make digital platforms safer for children and share policy recommendations with government agencies to help create better reporting"}
      />
      <SuccessStories />
      <AchievementHeader
        achiveHeader="BEFORE AND AFTER"
        achiveDescription="Hold and slide right to see the school transform from before to after our intervention"
      />
      <BeforeAfterSlider imgUrl1="https://www.zindagitrust.org/img/sections/school1.jpg" imgUrl2="https://www.zindagitrust.org/img/sections/school2new.jpg" />
      <BankDetails />
      <UpperFooter
        upperTitle={"SCHEDULE A VISIT TO OUR MODEL SCHOOLS"}
        upperText={"Book a visit to our school to meet the students whose lives have been transformed."}
        upperBtn={"SCHEDULE NOW"}
      />
    </div>
  );
};

export default HomePage;