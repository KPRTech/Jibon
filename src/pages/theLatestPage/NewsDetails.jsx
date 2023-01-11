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
                        <p className='font-mont my-1 text-[#333]/90'>{news.date}</p>
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
                    <div className='font-rale text-[17px] text-[#333] leading-[28px]'>
                        <img src={news.img1} alt="" />
                        <p>{news.description1}</p>
                        <img src={news.img2} alt="" />
                        <p>{news.description2}</p>
                        <p>{news.description3}</p>
                        <img src={news.img3} alt="" />
                        <p>{news.description4}</p>
                        <p>{news.description5}</p>
                        <img src={news.img4} alt="" />
                        <p>{news.description6}</p>
                        <p>{news.description7}</p>
                        <img src={news.img5} alt="" />
                        <p>{news.description8}</p>
                        {news.quote1 ?
                            <div>
                                <p>{news.quotetext1}</p>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote1}</p></blockquote>
                                </div>
                            </div> : <></>}
                        <p>{news.description9}</p>
                        {news.quote2 ?
                            <div>
                                <p>{news.quotetext2}</p>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote2}</p></blockquote>
                                </div>
                            </div> : <></>}
                        <img src={news.img6} alt="" />
                        <p>{news.description10}</p>
                        <img src={news.img7} alt="" />
                        <p>{news.description11}</p>
                        <img src={news.img8} alt="" />
                        <p>{news.description12}</p>
                        <img src={news.img9} alt="" />
                        {news.quote3 ?
                            <div>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote3}</p></blockquote>
                                </div>
                            </div> : <></>}
                        {news.quote4 ?
                            <div>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote4}</p></blockquote>
                                </div>
                            </div> : <></>}
                        {news.quote5 ?
                            <div>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote5}</p></blockquote>
                                </div>
                            </div> : <></>}
                        {news.quote6 ?
                            <div>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote6}</p></blockquote>
                                </div>
                            </div> : <></>}
                        {news.quote7 ?
                            <div>
                                <div className={`block bg-[#fff] py-[15px] pl-[45px] pr-[20px] mb-[5px] italic font-serif text-primary shadow-[2px_2px_15px_#ccc] border-solid border-l-[15px] border-r-[2px] border-[#ff6400]`}>
                                    <blockquote><p className='text-[#333]'>{news.quote7}</p></blockquote>
                                </div>
                            </div> : <></>}
                        <p>{news.description13}</p>
                        <p>{news.description14}</p>
                        <p>{news.description15}</p>
                    </div>
                </div>
                <VolunteerSidebar className={"max-w-xs mx-auto lg:mx-0 mt-6 lg:ml-36"} />
            </div>
        </div>
    );
};

export default NewsDetails;