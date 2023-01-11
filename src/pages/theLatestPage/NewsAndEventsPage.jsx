import React, { useEffect, useState } from 'react';
import HeroBanner from '../../components/HeroBanner';
import BreadCrumb from '../../components/ui/BreadCrumb';
import NewsEvents from './NewsEvents';

const NewsAndEventsPage = () => {
    const [newsEvents, setNewsEvents] = useState([]);
    useEffect(() => {
        fetch("newsDetails.json")
            .then((res) => res.json())
            .then((data) => setNewsEvents(data));
    }, []);
    return (
        <div>
            <HeroBanner title={"News, Stories and Events"} heroTextOne={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}></HeroBanner>
            <BreadCrumb breadCrumbText={"News And Events"}></BreadCrumb>
            <div className='mb-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-[180px]">
                    {newsEvents.map((news) => (
                        <NewsEvents
                            key={news.id}
                            news={news}>
                        </NewsEvents>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsAndEventsPage;
