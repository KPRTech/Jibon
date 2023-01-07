import React from 'react';
import AchievementHeader from '../AchievementHeader';
import impactImg1 from '../../assets/images/impact-img1.jpg';
import impactImg2 from '../../assets/images/impact-img2.jpg';
import impactImg3 from '../../assets/images/impact-img3.jpg';
import impactImg4 from '../../assets/images/impact-img4.jpg';
import impactImg5 from '../../assets/images/impact-img5.jpg';


const OurImpact = () => {
    return (
        <div className='mx-24'>
              <AchievementHeader achiveHeader="OUR IMPACT" achiveDescription="Our impact includes revamped and new school facilities; individual student achievements in academics and beyond; the introduction of programs like art, sports and chess; student wellness initiatives such as breakfast, healthcare and counseling; teacher professional development; customised blended learning through software; and, most importantly, change in national and provincial education policy." />
            <div className='container grid grid-rows-1 lg:grid-cols-5 md:gap-2 sm:text-center md:grid-cols-2 grid-cols-1 lg:gap-4 gap-y-4 lg:py-12 py-4 px-4 '>
               
                  <a href="https://www.zindagitrust.org/impact/infrastructure"><img src={impactImg1} alt="footer-img2" /></a>
              <a href="https://www.zindagitrust.org/impact/governance"><img src={impactImg2} alt="footer-img2" /></a>
               <a href="https://www.zindagitrust.org/impact/new-programs"><img src={impactImg3} alt="footer-img2" /></a>
             <a href="https://www.zindagitrust.org/impact/academics"><img src={impactImg4} alt="footer-img2" /></a>
              <a href="https://www.zindagitrust.org/impact/policy"><img src={impactImg5} alt="footer-img2" /></a>
              </div>
        </div>
    );
};

export default OurImpact;