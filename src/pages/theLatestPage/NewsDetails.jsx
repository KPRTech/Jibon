import React from 'react';
import { useParams } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';
import BreadCrumb from '../../components/ui/BreadCrumb';
import VolunteerSidebar from '../../components/volunteerSidebar/VolunteerSidebar';

const NewsDetails = () => {
    const { title } = useParams();
    return (
        <div>
            <HeroBanner
                title={"News, Stories and Events"}
                heroTextOne={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}
            ></HeroBanner>
            <div>
                <BreadCrumb className={"w-3/5"} breadCrumbText={`News and Events » ${title}`}></BreadCrumb>
            </div>
            <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
                <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
                    <h1 className="font-mont text-xl text-black font-bold pb-4 mb-4 border-b-2">{title}</h1>
                </div>
                <VolunteerSidebar className={"lg:w-[30%]"} />
            </div>
        </div>
    );
};

export default NewsDetails;