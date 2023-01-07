import React from 'react';
import AchievementHeader from '../AchievementHeader';
import breakfast from '../../assets/images/breakfast.png';
import program from '../../assets/images/program-img2.png';
import sports from '../../assets/images/sports.png';

const FeaturePrograms = () => {
    return (
        <div className='mx-24'>
             <AchievementHeader achiveHeader="FEATURED PROGRAMS" achiveDescription="Our programs enrich the government school experience for students: we build the capacity of government teachers; teach weekly sports, art and chess classes; support student wellness through healthcare, daily meals and counseling; bring classroom innovation like technology enhanced learning in math." />
            <div className='container grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:py-12 py-4 px-4'>

<div>
   <a href=""> <img className='hover:shadow-lg' src={breakfast} alt="" /></a>
</div>
<div>
   <a href=""> <img src={program} alt="" /></a>
</div>
<div>
   <a href=""> <img src={sports} alt="" /></a>
</div>
            </div>
        </div>
    );
};

export default FeaturePrograms;