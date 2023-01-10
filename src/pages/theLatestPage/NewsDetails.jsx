import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';
import VolunteerSidebar from '../../components/volunteerSidebar/VolunteerSidebar';
import useFetch from './useFetch';

const NewsDetails = () => {
    const { title } = useParams();
    const {
        data: { newses },
        error,
        loading
    } = useFetch(`newses?title=${title}`);

    console.log({ newses, error, loading });

    const news = newses.find(
        (news) => `${news.title}` === title
    );

    return (
        <div>
            <HeroBanner
                title={"News, Stories and Events"}
                heroTextOne={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}
            ></HeroBanner>
            <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between my-10">
                <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
                    <div>
                        <p>{news.date}</p>
                        <div className="text-sm font-mont flex w-[80%]">
                            <Link
                                to="/"
                                className="text-[#ff6400] hover:underline linear duration-300"
                            >
                                Home
                            </Link>
                            <span className="text-[#333] mx-1">»</span>
                            <p className={`text-[#333] text-[15px]`}>News and Events » {title}</p>
                        </div>
                    </div>
                    <h1 className="font-mont text-xl text-black font-bold pb-4 mb-4 border-b-2">{title}</h1>
                    <img src={news.img} alt="" />
                    <p>{news.description}</p>
                </div>
                <VolunteerSidebar className={"lg:w-[30%]"} />
            </div>
        </div>
    );
};

export default NewsDetails;