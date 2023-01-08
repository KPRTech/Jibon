import React from 'react';
import AchievementHeader from '../../components/AchievementHeader';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import MakeDonation from '../../components/MakeDonation/MakeDonation';
import ShowBanner from '../../components/ShowBanner';
import AcademicsResult from '../../components/ui/AcademicsResult';
import ContactDetails from '../../components/ui/ContactDetails';


const AKhatoonEPakistanPage = () => {
    return (
        <div className=''>
      <ShowBanner></ShowBanner>
      <AchievementHeader className="text-[#FF6400]" achiveHeader="BEFORE AND AFTER GALLERY" achiveDescription="Hold and slide right to see the school transform from before to after our intervention" />
      <AcademicsResult></AcademicsResult>
      <ContactDetails></ContactDetails>
      
  <MakeDonation></MakeDonation>
        </div>
    );
}

export default AKhatoonEPakistanPage;
