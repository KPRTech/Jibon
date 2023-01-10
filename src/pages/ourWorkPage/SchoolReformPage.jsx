import React from 'react';
import SchoolReformSlider from '../../components/SchoolReformSlider';
import AchievementHeader from '../../components/AchievementHeader';
import SchoolReformOurWork from '../../components/SchoolReformOurWork';
import SchoolReformModel from '../../components/SchoolReformModel';
import HeroBanner from '../../components/HeroBanner';
import PilotProjects from '../../components/PilotProjects';
import BeforeAfterSchoolReform from '../../components/BeforeAfterSchoolReform';
import Slider from "react-slick"

const SchoolReformPage = () => {

  const school_reform = [
    {
      img: '/sr-1.jpg',
      title: 'Infrastructure',
      content: 'We transformed deteriorating government school buildings with abandoned grounds, crumbling walls, empty classrooms and missing facilities, into purposefully utilized spaces, and demonstrated first-hand how creating a safe environment.',
    },
    {
      img: '/sr-2.jpg',
      title: 'Governance',
      content: 'We have inculcated a sense of support and accountability amongst government teachers in our schools, in order to ensure that they fulfill their responsibilities and improve their teaching practices which directly impacts student learning.',
    },
    {
      img: '/sr-3.jpg',
      title: 'Academics',
      content: 'Academic development programs established by our trust include student development initiatives; and capacity building for teachers of core subjects',
    },
    {
      img: '/sr-4.jpg',
      title: 'New Programs',
      content: '  A rich menu of co-curricular and extra-curricular programs such as blended learning maths classes, mind sports, art and life skills based education are offered to students with the aim of making classroom learning fun.',
    },
    {
      img: '/sr-5.jpg',
      title: 'Parental Engagement',
      content: ' Involving parents via regular parent-teacher meetings, counselling, workshops and invitations to major school events has helped in building a strong school community that takes ownership of our work.',
    },
  ]

  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 2,
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
    <div>
      <HeroBanner title="School Reform" heroTextOne="Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education." />
      <SchoolReformOurWork />
      <SchoolReformModel />
      <PilotProjects />
      <BeforeAfterSchoolReform />
      <div className='mb-10 lg:w-9/12 lg:m-auto lg:mb-10'>
        <AchievementHeader achiveHeader="HOW HAS ZINDAGI TRUST REFORMED GOVERNMENT SCHOOLS?" achiveDescription="Both pilot projects are examples of how government schools can be transformed into centres of excellent learning and play a transformative role in children’s lives." />

        <div className='p-5 mt-20 container m-auto'>
          <Slider {...settings}>
            {school_reform.map((school, index) => {
              return (
                <SchoolReformSlider img={school.img} title={school.title} content={school.content} key={index} />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SchoolReformPage;
