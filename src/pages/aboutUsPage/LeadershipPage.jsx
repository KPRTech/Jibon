import React from "react";
import Leader from "../../components/Leadership-and-board/Leader";
import OurTeam from "../../components/Leadership-and-board/OurTeam";
import Team from "../../components/Leadership-and-board/Team";
import TeamMembers from "../../components/Leadership-and-board/TeamMembers";
import MakeDonation from "../../components/MakeDonation/MakeDonation";
import HeroBanner from "../../components/HeroBanner";

const LeadershipPage = () => {
  return (
    <div>
      <HeroBanner title={`Leadership & Board`}></HeroBanner>
      <Leader></Leader>
      <OurTeam></OurTeam>
      <Team></Team>
      <TeamMembers></TeamMembers>
      <MakeDonation></MakeDonation>
    </div>
  );
};

export default LeadershipPage;
