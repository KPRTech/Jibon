import React from "react";
import HeroBanner from "../../components/HeroBanner";
import UpperFooter from "../../components/UpperFooter";
import PolicyAchievements from "../../components/PolicyAchievements";
import MediaGallery from "../../components/MediaGallery";
import InTheNews from "../../components/InTheNews";

export const policy_achievement = [
  {
    id: 1,
    img: "https://www.zindagitrust.org/img/advocacy/lsbe.jpg",
    title: "Child Protection through Life Skills Based Education (LSBE)",
    content1:
      "Life Skills Based Education or LSBE empowers children to recognise and protect themselves against physical and sexual abuse, disease, poor hygiene, nutritional inequality or insufficiency and other rights violations. Through our advocacy with Aahung, the governments of Sindh and Balochistan have committed to introducing LSBE into their textbooks.",
    content2:
      "The process of LSBE integration has already started in Sindh with one chapter having been integrated into the Class 7 Social Studies textbook and teachers having been trained to impart LSBE themes. Other themes are to be incorporated in the next round of textbook printing later this year (2019).",
  },
  {
    id: 2,
    img: "https://www.zindagitrust.org/img/advocacy/conlidation.jpg",
    title: "School Consolidation",
    content1:
      "Early on at our first adopted government school, we struggled with administrative inefficiences such as having neighbouring classrooms not being able to share teachers, decision-making School Heads and other resources. We identified the administrative nightmare of multiple schools running under one campus as a problem that plagued government schools across Karachi and advocated for such schools to be merged under one administration.",
    content2:
      "This led to the Sindh Government notifying the School Consolidation Policy, issued in 2011, under which multiple school administrations under one campus or nearby schools were merged into one school under one administration now called a Campus School. The policy applies to all government school in the province and promotes more capable School Heads for Campus Schools, better school management, effective utilisation of resources, easier monitoring and access to the community.",
  },
  {
    id: 3,
    img: "https://www.zindagitrust.org/img/advocacy/punishment.jpg",
    title: "Banning Corporal Punishment",
    content1:
      "Our advocacy to ban corporal punishment began in 2013 when our Founder highlighted the stories of students who suffered physical injuries at the hands of their teachers through a television show on education issues Chal Parha. This show awakened the national conversation on eliminating corporal punishment in schools and helped us mobilise lawmakers to pass legislation Banning the same. Despite the Bill being unanimously passed by the National Assembly, it unfortunately lapsed before the Senate. However, it paved the way for provincial and legislative assemblies in Sindh, Gilgit Baltistan and Khyber Pakhtunkhwa to take measures to ban corporal punishment. It was also followed by more incidents of corporal punishment being reported in the media prompting action by the authorities.",
    content2:
      "We continue to push for effective legislation across Pakistan that prohibits and criminalizes corporal punishment in all settings as well as to change the mindsets that perpetuate this practice. Currently only Sindh and Gilgit Baltistan have adequate laws that specifically prohibit corporal punishment – the other provinces are still relying on executive orders and child protection acts that do not ban the harmful practice outright.  In 2020, in response to our petition, the Islamabad High Court ordered the suspension of Article 89 of the Pakistan Penal Code, which was providing a legal defense to corporal punishment by allowing it “in good faith” and “for the benefit” of the child in the Islamabad Capital Territory (ICT).  We had also advocated for the passage of the ICT Prohibition of Corporal Punishment Bill, which was passed by the National Assembly in February 2021. We are now pushing the Senate to pass this bill into law. To learn more about the work that is left to be done, read our policy brief on corporal punishment",
  },
  {
    id: 4,
    img: "https://www.zindagitrust.org/img/advocacy/abuseofground.jpg",
    title: "Private Abuse of School Grounds",
    content1:
      "After taking over the school, we put an end to the school grounds being used by private parties for events like weddings which were disruptive to the school environment, and successfully pushed the government to implement the same in schools across the city.",
  },
];

const PolicyPagePage = () => {
  return (
    <div>
      <HeroBanner
        title="Policy"
        heroTextOne="Our policy achievement are steps successfully undertaken in our schools and"
        heroTextTwo="then implemented by national or provincial governments as a result of our advocacy."
      />
      <div className="w-[70%] m-auto">
        <div className="text-center mt-10 mb-10">
          <span className="font-rale text-slate-700">
            Jump To <span className="text-sm">&#62;&#62; </span>
          </span>
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            Policy Achievements
          </a>{" "}
          |{" "}
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            {" "}
            Media Gallery
          </a>{" "}
          |{" "}
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            {" "}
            In The News
          </a>
        </div>

        {/* <div className="text-center p-10 ">
          <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
          POLICY ACHIEVEMENTS
          </h2>
          <p className="font-rale text-slate-700 text-base mt-2">
          We have been successful in bringing about a change in policy and legislation for child protection and school governance due to our efforts in advocacy. Some of our significant policy achievements include:
          </p>
        </div> */}

        <PolicyAchievements
          policy_achievement={policy_achievement}
          title="POLICY ACHIEVEMENTS"
          content="We have been successful in bringing about a change in policy and legislation for child protection and school governance due to our efforts in advocacy. Some of our significant policy achievements include:"
        />
      </div>
      <div className="mt-10">
        <MediaGallery />
      </div>

      <div className="overflow-hidden">
        <InTheNews />
      </div>

      <UpperFooter
        upperTitle="SCHEDULE A VISIT TO OUR MODEL SCHOOLS"
        upperText="Book a visit to our school to meet the students whose lives have been transformed."
        upperBtn="Schedule now "
      />
    </div>
  );
};

export default PolicyPagePage;
