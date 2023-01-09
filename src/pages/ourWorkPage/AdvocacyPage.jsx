import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import HistoryVision from '../../components/HistoryVision';
import CurrentGoals from '../../components/CurrentGoals';
import MediaGallery from '../../components/MediaGallery';
import InTheNews from '../../components/InTheNews';

const AdvocacyPage = () => {
    return (
        <div>
            <HeroBanner title="Advocacy" heroTextOne="Reforming government schools across Pakistan through change in policy and legislation" />
            <div className='border-b-2 mb-10'>
                <HistoryVision />
            </div>
            <CurrentGoals/>
            <MediaGallery/>
            <InTheNews/>
        </div>
    );
}

export default AdvocacyPage;
