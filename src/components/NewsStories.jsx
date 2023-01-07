import React from 'react';
import AchievementHeader from './AchievementHeader';

const NewsStories = ({ newsDate1, newsTitle1, newsDescription1, newsImg1, newsDate2, newsTitle2, newsDescription2, newsImg2, newsDate3, newsTitle3, newsDescription3, newsImg3, }) => {
    return (
        <div>
            <AchievementHeader
                achiveHeader={"NEWS, STORIES AND EVENTS"}
                achiveDescription={"Follow Zindagi Trust’s advocacy and students’ achievements, latest program developments, recent partnerships and future steps."}></AchievementHeader>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-[180px]'>
                <div className='max-w-[360px] mx-auto'>
                    <p className='text-[#666666] text-[13px] align-middle font-mont font-medium ml-[10px] mb-3'>{newsDate1}</p>
                    <div>
                        <div className='relative'>
                            <div className='hover:bg-black/60 hover:cursor-pointer transition-all duration-300 ease-out absolute w-full h-full opacity-0 hover:opacity-100'>
                                <div>
                                    <span className='absolute text-xs font-mont bottom-[35px] left-[30px] block text-white uppercase before:mb-[10px] before:content:"" before:w-[12px] before:h-[12px] before:border-2 before:border-solid before:border-[#ff6400] before:rounded-[50%] before:block'>Read More</span>
                                </div>
                            </div>
                            <img className='' src={newsImg1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[#333333] font-mont font-bold leading-5 mt-[30px] after:content:"" after:block after:mt-[20px] after:w-[25px] after:h-[4px] after:bg-[#ff6400]'>{newsTitle1}</h1>
                            <p className='text-[#333] text-xs font-mont mt-5 leading-[25px]'>{newsDescription1}</p>
                            <button className='font-mont text-sm text-[#ff6400] font-bold'>Read More »</button>
                        </div>
                    </div>
                </div>
                <div className='max-w-[360px] mx-auto'>
                    <p className='text-[#666666] text-[13px] align-middle font-mont font-medium ml-[10px] mb-3'>{newsDate2}</p>
                    <div>
                        <div className='relative'>
                            <div className='hover:bg-black/60 hover:cursor-pointer transition-all duration-300 ease-out absolute w-full h-full opacity-0 hover:opacity-100'>
                                <div>
                                    <span className='absolute text-xs font-mont bottom-[35px] left-[30px] block text-white uppercase before:mb-[10px] before:content:"" before:w-[12px] before:h-[12px] before:border-2 before:border-solid before:border-[#ff6400] before:rounded-[50%] before:block'>Read More</span>
                                </div>
                            </div>
                            <img className='' src={newsImg2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[#333333] font-mont font-bold leading-5 mt-[30px] after:content:"" after:block after:mt-[20px] after:w-[25px] after:h-[4px] after:bg-[#ff6400]'>{newsTitle2}</h1>
                            <p className='text-[#333] text-xs font-mont mt-5 leading-[25px]'>{newsDescription2}</p>
                            <button className='font-mont text-sm text-[#ff6400] font-bold'>Read More »</button>
                        </div>
                    </div>
                </div>
                <div className='max-w-[360px] mx-auto'>
                    <p className='text-[#666666] text-[13px] align-middle font-mont font-medium ml-[10px] mb-3'>{newsDate3}</p>
                    <div>
                        <div className='relative'>
                            <div className='hover:bg-black/60 hover:cursor-pointer transition-all duration-300 ease-out absolute w-full h-full opacity-0 hover:opacity-100'>
                                <div>
                                    <span className='absolute text-xs font-mont bottom-[35px] left-[30px] block text-white uppercase before:mb-[10px] before:content:"" before:w-[12px] before:h-[12px] before:border-2 before:border-solid before:border-[#ff6400] before:rounded-[50%] before:block'>Read More</span>
                                </div>
                            </div>
                            <img className='' src={newsImg3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[#333333] font-mont font-bold leading-5 mt-[30px] after:content:"" after:block after:mt-[20px] after:w-[25px] after:h-[4px] after:bg-[#ff6400]'>{newsTitle3}</h1>
                            <p className='text-[#333] text-xs font-mont mt-5 leading-[25px]'>{newsDescription3}</p>
                            <button className='font-mont text-sm text-[#ff6400] font-bold'>Read More »</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsStories;