import React from 'react'
import Slider from "react-slick";

const InTheNews = () => {

    const in_the_news = [
        {
            title: 'Upcoming work in Punjab: Model Schools and Child Protection',
            img: 'https://www.zindagitrust.org/img/news/image13.jpg',
            link: 'https://www.zindagitrust.org/news-details/upcoming-work-in-punjab-model-schools-and-child-protection-13'
        },
        {
            title: 'Zindagi Trust petition leads to IHC ban on corporal punishment',
            img: 'https://www.zindagitrust.org/img/news/image17.jpg',
            link: 'https://www.zindagitrust.org/news-details/zindagi-trust-petition-leads-to-ihc-ban-on-corporal-punishment-17'
        },
        {
            title: 'Artists, athletes and activists call for end to state inaction on Child Protection',
            img: 'https://www.zindagitrust.org/img/news/image7.jpg',
            link: 'https://www.zindagitrust.org/news-details/artists-athletes-and-activists-call-for-end-to-state-inaction-on-child-protection-8'
        },
        {
            title: 'PPP decides to equip children with life skills through education',
            img: 'https://www.zindagitrust.org/img/news/image4.jpg',
            link: 'https://www.zindagitrust.org/news-details/ppp-decides-to-equip-children-with-life-skills-through-education-5'
        },
        {
            title: "Shehzad Roy calls Kasur incident 'heart-wrenching', demands justice",
            img: 'https://www.zindagitrust.org/img/news/image6.jpg',
            link: 'https://www.zindagitrust.org/news-details/shehzad-roy-calls-kasur-incident-heart-wrenching-demands-justice-7'
        },
    ]

    const settings = {
      dots: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className='px-4 lg:px-[45px] pt-[30px] text-center lg:w-[80%] m-auto'>
        <h2 className='text-[#FF6400] text-2xl font-bold mb-10'>IN THE NEWS</h2>

        <div className='mb-10'>
            <Slider {...settings}>
                {in_the_news.map((news, index) => {
                    return (
                        <div>
                            <div className='p-3 flex flex-col items-center h-[350px]' key={index}>
                                <span className='p-2 font-bold'>{news.title}</span>
                                <a href={news.link} target="_blank" rel="noopener noreferrer">
                                    <img src={news.img} alt="" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default InTheNews