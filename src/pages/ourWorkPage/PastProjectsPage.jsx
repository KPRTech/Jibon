import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import PrimarySlider from '../../components/PrimarySlider';
import AchievementHeader from '../../components/AchievementHeader';
import ProjectsOverview from '../../components/ProjectsOverview';
import LessonsLearned from '../../components/LessonsLearned';
import Slider from "react-slick"

const PastProjectsPage = () => {

    const success_stories = [
        {
            img: '/zahida.jpg',
            title: 'Zahida',
            content: '13 year old Zahida sits at her station in a clothes tailoring shop, holding the wheel of the sewing machine...',
            link: 'https://www.globalgiving.org/projects/i-am-paid-to-learn/reports/?subid=137008'
        },
        {
            img: '/ali.jpg',
            title: 'Ali',
            content: 'Ali Raza studies in the 5th grade at a Zindagi Trust School in Lahore. He never misses school...',
            link: 'https://www.globalgiving.org/projects/i-am-paid-to-learn//updates/?subid=62768'
        },
        {
            img: '/simran.jpg',
            title: 'Simran',
            content: 'Simran appears enrapt as she curiously stares into her grade 8 science book. The page visible shows an illustration...',
            link: 'https://www.globalgiving.org/projects/mainstream-secondary-education-to-working-children//updates/?subid=125527'
        },
    ]

     const settings = {
      dots: true,
      slidesToShow: 2,
      autoplay: true,
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
        <div>
            <HeroBanner title="Paid to Learn" heroTextOne="Zindagi Trust is a non-profit organization that strives to improve the quality of education available to the average Pakistani" />
            <ProjectsOverview/>
            <div className='mb-10 lg:w-9/12 lg:m-auto lg:mb-10'>
                <AchievementHeader achiveHeader="SUCCESS STORIES" achiveDescription="Please click on the links below to follow the success stories of some of our students." />

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
            <LessonsLearned/>
        </div>
    );
}

export default PastProjectsPage;
