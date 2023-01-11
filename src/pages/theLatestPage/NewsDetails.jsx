import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';
import VolunteerSidebar from '../../components/volunteerSidebar/VolunteerSidebar';
import useFetch from './useFetch';

const NewsDetails = () => {
    const { title, id } = useParams();
    const {
        data: { newses },
        error,
        loading
    } = useFetch(`newses?title=${title}`);

    console.log({ newses, error, loading });

    const news = newses.find(
        (news) => `${news.id}` === id
    );

    return (
        <div>
            <HeroBanner
                title={"News, Stories and Events"}
                heroTextOne={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}
            ></HeroBanner>
            <div className="lg:flex lg:justify-center my-8">
                <div className="animate-[slideYTwo_1s_ease_1] max-w-3xl px-[15px]">
                    <div>
                        <p>{news.date}</p>
                        <div className="text-sm font-mont lg:w-[80%]">
                            <p className={`text-[#333] text-[15px]`}><Link
                                to="/"
                                className="text-[#ff6400] hover:underline linear duration-300 inline-block"
                            >
                                Home
                            </Link> » News and Events » {title}</p>
                        </div>
                    </div>
                    <h1 className="font-mont text-xl text-black font-bold pb-4 mb-4">{title}</h1>
                    <img src={news.img} alt="" />
                    <p>{news.desc1}</p>
                </div>
                <VolunteerSidebar className={"max-w-xs mx-auto lg:mx-0 mt-6 lg:ml-36"} />
            </div>
        </div>
    );
};

export default NewsDetails;