import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import HistoryVision from '../../components/HistoryVision';
import CurrentGoals from '../../components/CurrentGoals';
import MediaGallery from '../../components/MediaGallery';
import InTheNews from '../../components/InTheNews';
import PolicyAchievements from '../../components/PolicyAchievements';

const AdvocacyPage = () => {
    return (
        <div>
            <HeroBanner title="Advocacy" heroTextOne="Reforming government schools across Pakistan through change in policy and legislation" />
            <div className='border-b-2 mb-10 overflow-hidden'>
                <HistoryVision />
            </div>
            <PolicyAchievements/>
            <CurrentGoals/>
            <MediaGallery/>
            <div className='overflow-hidden'>
                <InTheNews/>
            </div>
        </div>
    );
}

export default AdvocacyPage;
