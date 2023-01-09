import React from 'react'
import Slider from "react-slick";

const HistoryVision = () => {

    const vision_slider = [
        {img: '/assets/images/apic1.jpg'},
        {img: '/assets/images/apic2.jpg'},
        {img: '/assets/images/apic3.jpg'},
        {img: '/assets/images/apic4.jpg'},
        {img: '/assets/images/apic5.jpg'},
        {img: '/assets/images/apic6.jpg'},
    ]

    const settings = {
      dots: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-[80%] w-fit m-auto lg:p-[4rem] py-[3rem]'>
        <div className='lg:px-10 px-5 lg:mb-0 mb-5'>
            <h1 className='lg:py-4 text-[#FF6400] font-bold text-2xl'>HISTORY AND VISION</h1>
            <hr />
            <p className='lg:py-4'>We work to change policy to reform schools through advocacy with the political leadership, the government including the top bureaucracy and mid-level officers and supporting organisations, civil society and other key opinion leaders and influencers.</p>
            <p className='lg:py-4'>Based on our learnings and successes at our schools, we have effectively brought change to policies in school governance and child protection.</p>
        </div>
        <div className='lg:w-[60%] md:w-[50%] w-full m-auto lg:p-0 p-2'>
            <Slider {...settings}>
                {vision_slider.map((vision, index) => {
                    return (
                        <div key={index}>
                            <img className='' src={vision.img} alt='' />
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default HistoryVision