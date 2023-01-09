import React from "react";
import DonationCard from "../donationCard/DonationCard";

const VolunteerSidebar = ({ className }) => {
  return (
    <div className={`mb-20 flex flex-col items-center gap-y-9 ${className}`}>
      <DonationCard
        imgSrc={"/assets/images/volunteer/donation_card1.jpg"}
        title={"Breakfast & Health"}
        description={`Healthy, happy children learn better. Our work in Student Wellness includes: a nutritious Daily Breakfast for 400 students from KG to Class 2; basic healthcare.`}
      />
      <DonationCard
        imgSrc={"/assets/images/volunteer/donation_card2.jpg"}
        title={"Teacher Professional Development"}
        description={`Teachers are the key to a productive classroom. We have established a Teacher Professional Development team at each of our schools to invest in the capacity of the existing government teacher.`}
      />
      <DonationCard
        imgSrc={"/assets/images/volunteer/donation_card3.jpg"}
        title={"Sports"}
        description={`Sports promote physical fitness, alertness and better concentration, collaboration, self-esteem, and perseverance in children. Each of our schools features weekly sports classes for all students.`}
      />
    </div>
  );
};

export default VolunteerSidebar;
