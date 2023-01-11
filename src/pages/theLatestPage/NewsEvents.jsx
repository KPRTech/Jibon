import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsEvents = ({ news }) => {
    const { id, date, img, title, description } = news;
    const navigate = useNavigate();

    const navigateToDetail = title => {
        navigate(`/news-details/${title}/${id}`);
    }
    return (
        <div>
            <div className="max-w-[360px] mx-auto">
                <p className="text-[#666666] text-[13px] align-middle font-mont font-medium ml-[10px] mb-3">
                    {date}
                </p>
                <div>
                    <div className="relative">
                        <div className="hover:bg-black/60 hover:cursor-pointer transition-all duration-300 ease-out absolute w-full h-full opacity-0 hover:opacity-100" onClick={() => navigateToDetail(title, id)}>
                            <div>
                                <span className='absolute text-xs font-mont bottom-[35px] left-[30px] block text-white uppercase before:mb-[10px] before:content:"" before:w-[12px] before:h-[12px] before:border-2 before:border-solid before:border-[#ff6400] before:rounded-[50%] before:block'>
                                    Read More
                                </span>
                            </div>
                        </div>
                        <img className="" src={img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#333333] font-mont font-bold leading-5 mt-[30px] after:content:"" after:block after:mt-[20px] after:w-[25px] after:h-[4px] after:bg-[#ff6400]'>
                            {title}
                        </h1>
                        <p className="text-[#333] text-xs font-mont mt-5 leading-[25px]">
                            {description}
                        </p>
                        <button className="font-mont text-sm text-[#ff6400] font-bold" onClick={() => navigateToDetail(title, id)}>
                            Read More »
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEvents;