import React from 'react'
import PrimarySlider from '../components/PrimarySlider'
import AchievementHeader from '../components/AchievementHeader'
import Slider from "react-slick"

const SuccessStories = () => {

    const success_stories = [
        {
            img: '/COC-SEL.jpg',
            title: 'Ruqqaiya',
            content: 'A government teacher’s story of inspired innovation in trying time',
            link: 'ruqqaiya-5'
        },
        {
            img: '/muqdas.jpg',
            title: 'Muqdas Saeed',
            sub: 'Class 5C, Khatoon-e-Pakistan Government Girls School',
            content: 'Muqdas Saeed : A Social and Emotional Learner in the time of COVID 19',
            link: 'muqdas-saeed-4'
        },
        {
            img: '/maliha.jpg',
            title: 'Maliha Ali',
            sub: 'Alumna - Class of 2019, SMB Fatima Jinnah Government Girls School',
            content: 'Finished 7th in National Open Chess Competition, Master Trainer for chess for TCF teachers',
            link: 'maliha-ali-3'
        },
        {
            img: '/rabiya.jpg',
            title: 'Rabiya Abbasi',
            sub: 'Class 7, Khatoon-e-Pakistan Government Girls School',
            content: 'Joined as a Fast Track student, transitioned to regular classes within 3 years and is now on the Students Council',
            link: 'rabiya-abbasi-2'
        },
        {
            img: '/bushra.jpg',
            title: 'Bushra Maqsood',
            sub: 'Alumna - Class of 2018, SMB Fatima Jinnah Government Girls School',
            content: 'Represented Pakistan at the Seeds of Peace camp in Maine, USA, selected from over 300 applicants',
            link: 'bushra-maqsood-1'
        },
    ]

    const settings = {
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
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
    <div className='mb-10 lg:w-9/12 lg:m-auto lg:mb-10'>
        <AchievementHeader achiveHeader="SUCCESS STORIES" achiveDescription="Read about how our schools are transforming students' lives" />

        <div className='p-5 mt-20 container m-auto'>
            <Slider {...settings}>
                {success_stories.map((story, index) => {
                    return (
                        <PrimarySlider img={story.img} title={story.title} sub={story.sub} content={story.content} link={story.link} key={index} />
                    )
                })}
            </Slider>
        </div> 
    </div>
  )
}

export default SuccessStories