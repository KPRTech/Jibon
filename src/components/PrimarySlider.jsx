import React from 'react';
import AchievementHeader from './AchievementHeader';
import Slider from "react-slick"

const PrimarySlider = () => {

    const success_stories = [
        {
            img: '/COC-SEL.jpg',
            title: 'Ruqqaiya',
            content: 'A government teacher’s story of inspired innovation in trying time',
            link: 'https://www.zindagitrust.org/success-stories/ruqqaiya-5'
        },
        {
            img: '/muqdas.jpg',
            title: 'Muqdas Saeed',
            sub: 'Class 5C, Khatoon-e-Pakistan Government Girls School',
            content: 'Muqdas Saeed : A Social and Emotional Learner in the time of COVID 19',
            link: 'https://www.zindagitrust.org/success-stories/muqdas-saeed-4'
        },
        {
            img: '/maliha.jpg',
            title: 'Maliha Ali',
            sub: 'Alumna - Class of 2019, SMB Fatima Jinnah Government Girls School',
            content: 'Finished 7th in National Open Chess Competition, Master Trainer for chess for TCF teachers',
            link: 'https://www.zindagitrust.org/success-stories/maliha-ali-3'
        },
        {
            img: '/rabiya.jpg',
            title: 'Rabiya Abbasi',
            sub: 'Class 7, Khatoon-e-Pakistan Government Girls School',
            content: 'Joined as a Fast Track student, transitioned to regular classes within 3 years and is now on the Students Council',
            link: 'https://www.zindagitrust.org/success-stories/rabiya-abbasi-2'
        },
        {
            img: '/bushra.jpg',
            title: 'Bushra Maqsood',
            sub: 'Alumna - Class of 2018, SMB Fatima Jinnah Government Girls School',
            content: 'Represented Pakistan at the Seeds of Peace camp in Maine, USA, selected from over 300 applicants',
            link: 'https://www.zindagitrust.org/success-stories/bushra-maqsood-1'
        },
    ]

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
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
        <div className='mb-10'>
            <AchievementHeader achiveHeader="SUCCESS STORIES" achiveDescription="Read about how our schools are transforming students' lives" />

            <div className='p-5 mt-20 container m-auto'>
                <Slider {...settings}>
                    {success_stories.map((story, index) => {
                        return (
                                
                            <div className='cursor-grab'>
                                <div className='lg:flex lg:h-5/6'>
                                    <div className='lg:w-[30%]'>
                                        <img className='w-200' src={process.env.PUBLIC_URL + `/assets/images${story.img}`} alt={story.title} />
                                    </div>
                                    <div className='flex-col justify-center p-2'>
                                        <div className='mb-10'>
                                            <h1 className='font-bold text-lg'>{story.title}</h1>
                                            {story.sub && <span className='font-light text-sm italic'>{story.sub}</span>}
                                        </div>
                                        <div className='shadow-lg p-3 lg:w-3/4'>
                                            <div>
                                                <p>{story.content}</p>
                                            </div>
                                            <div className='p-1'>
                                                <a className='text-amber-500' href={story.link} target="_blank" rel="noopener noreferrer">Read her story {'>>'}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>     
                            
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default PrimarySlider;
