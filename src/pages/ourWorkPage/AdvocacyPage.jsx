import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import HistoryVision from '../../components/HistoryVision';

const AdvocacyPage = () => {
    return (
        <div>
            <HeroBanner title="Advocacy" heroTextOne="Reforming government schools across Pakistan through change in policy and legislation" />
            <div className='border-b-2 mb-10'>
                <HistoryVision />
            </div>
        </div>
    );
}

export default AdvocacyPage;
