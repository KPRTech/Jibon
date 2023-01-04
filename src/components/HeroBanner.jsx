import React from 'react';

const HeroBanner = ({title,heroText}) => {
    return (
    <div>
        <div className='bg-fixed h-[280px] relative'
            style={{
            background: 'url("assets/images/aboutbg3.jpg") top center no-repeat',
            }}
        >
            <div className='bg-black h-[280px] bg-opacity-[.78]'>
                <div className='relative z-20'>
                    <div className='text-center pt-[150px] pb-8'>
                        <div className='text-4xl text-white font-light leading-7 font-mont'>{title}</div>
                        <br />
                        <em className='text-[#999999] font-play leading-[16px] italic'>{heroText}</em>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HeroBanner;
