import React from 'react';
import AchievementHeader from '../../components/AchievementHeader';
import FatimaAfterBeforeSlider from '../../components/FatimaAfterBeforeSlider';
import FatimaJinnahBanner from '../../components/FatimaJinnahBanner';
import MakeDonation from '../../components/MakeDonation/MakeDonation';
import AcademicsResult from '../../components/ui/AcademicsResult';
import ContactDetails from '../../components/ui/ContactDetails';



const SMBFatimaJinnahPage = () => {
    return (
        <div className=''>
            <FatimaJinnahBanner></FatimaJinnahBanner>
            <AchievementHeader className="text-[#FF6400]" achiveHeader="BEFORE AND AFTER GALLERY" achiveDescription="Hold and slide right to see the school transform from before to after our intervention" />
            <FatimaAfterBeforeSlider></FatimaAfterBeforeSlider>
            <AcademicsResult></AcademicsResult>
      <ContactDetails></ContactDetails>
      <MakeDonation></MakeDonation>
        </div>
    );
}

export default SMBFatimaJinnahPage;
