import React from "react";
import HeroBanner from "../../components/HeroBanner";
import SecondarySlider from "../../components/secondarySlider/SecondarySlider";
import UpperFooter from "../../components/UpperFooter";

const InfrastructurePage = () => {
  const slidingCards = [
    {
      title: "RE PURPOSING ABANDONED ROOMS AND BUILDINGS",
      image: [
         "assets/images/secondarySliderImage/1.jpg",
         "assets/images/secondarySliderImage/2.jpg",
         "assets/images/secondarySliderImage/3.jpg",
      ],
      description:
        "We have transformed abandoned rooms, hallways and inefficiently-used spaces at our adopted government schools into classrooms, labs, art rooms, libraries and even an auditorium.",
    },
    {
      title: "CLASSROOMS",
      image: [
         "assets/images/secondarySliderImage/4.jpg",
         "assets/images/secondarySliderImage/5.jpg",
         "assets/images/secondarySliderImage/6.jpg",
      ],
      description:
        "Classrooms in our adopted schools are now well-lit, clean, equipped with wall-to-wall chalkboards and have age-appropriate furniture designed to give students the best chance to learn.",
    },
    {
      title: "LANDSCAPING AND GREENERY",
      image: [
         "assets/images/secondarySliderImage/7.jpg",
         "assets/images/secondarySliderImage/8.jpg",
         "assets/images/secondarySliderImage/9.jpg",
      ],
      description:
        "Barren, unwelcoming grounds have been lined with trees and turned into lush green spaces promoting healthy air and visual serenity. Our schools have their own Environment Clubs and vegetable gardens providing a hands-on learning experience for the students as well as fresh ingredients for the School Breakfast program.",
    },
    {
      title: "SAFE ENVIRONMENT",
      image: [
         "assets/images/secondarySliderImage/10.jpg",
         "assets/images/secondarySliderImage/11.jpg",
         "assets/images/secondarySliderImage/10.jpg",
    ],

      description:
        "We cleaned and secured the environment and also repaired unsafe parts of the building and removed hazards such as exposed electricity wires to ensure the safety of all present in school.",
    },
    {
      title: "STUDENT FACILITIES",
      image: [
         "assets/images/secondarySliderImage/12.jpg",
         "assets/images/secondarySliderImage/13.jpg",
         "assets/images/secondarySliderImage/14.jpg",
      ],
      description:
        "The government schools are now equipped with designated art rooms, sports grounds and multi-purpose halls to encourage the holistic development of our students.",
    },
    {
      title: "SCHOOL CORRIDORS AND HALLWAY",
      image: [
         "assets/images/secondarySliderImage/15.jpg",
         "assets/images/secondarySliderImage/16.jpg",
         "assets/images/secondarySliderImage/17.jpg",
      ],
      description:
        "School corridors and hallways were repainted, re-tiled and brought back to life with plants, portraits of inspiring Pakistani women and displays of student artwork and coursework",
    },
    {
      title: "HEALTH AND WELLNESS",
      image: [
         "assets/images/secondarySliderImage/18.jpg",
         "assets/images/secondarySliderImage/19.jpg",
         "assets/images/secondarySliderImage/20.jpg",
      ],
      description:
        "Under-utilised rooms were converted into Health Rooms and Day Care Centres for students and staff at our government schools. The School Nurse and the School Counselor provide full-time support to safeguard the physical and mental health of our students.",
    },
    {
      title: "WASHROOMS",
      image: [
         "assets/images/secondarySliderImage/21.jpg",
         "assets/images/secondarySliderImage/21.jpg",
        // thirdImageSrc: "assets/images/secondarySliderImage/21.jpg",
      ],
      description:
        "We established clean, functional bathrooms and also ensured a system of upkeep to maintain their working and cleanliness at the government schools through privately-hired support staff in addition to the housekeeping staff assigned by the government.",
    },
  ];

  return (
    <div className="">
      <HeroBanner
        title="Infrastructure"
        heroTextOne="A school needs to be a welcoming space which a child looks forward to."
        heroTextTwo="It has to have the necessary infrastructure and facilities to promote learning."
      />
      <div className="text-center p-10 ">
        <h2 className="font-mont text-[#FF6400] text-2xl font-bold">VISION</h2>
        <p className="font-rale text-slate-700 text-base mt-2">
          We want to see all government schools transform into safe, clean and
          friendly learning spaces where the space is optimised for learning.
        </p>
      </div>
      <div>
        <img
          className="w-full h-96 object-cover"
          src="assets/images/infrastructure/header.jpg"
          alt=""
        />
      </div>
      <div
        className="w-[80%] mx-auto mt-12 mb-10 grid grid-cols-2 justify-items-center
      xs:max-xl:grid-cols-1 "
      >
        {slidingCards.map((slidingCard) => {
          return (
            <div className="2xl:w-[500px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] xs:w-[200px] mt-5">
              <h2 className="font-rale text-[#FF6400] text-2xl font-bold">
                {slidingCard.title}
              </h2>
              <div className="mt-2 mb-2">
                <hr />
              </div>
              <div className="mt-5">
                <SecondarySlider children={slidingCard} slideNo={1} />
              </div>
              <p className="mt-12 font-rale text-slate-700 text-base">
                {slidingCard.description}
              </p>
            </div>
          );
        })}
      </div>
      <UpperFooter
        upperTitle="SCHEDULE A VISIT TO OUR MODEL SCHOOLS"
        upperText="Book a visit to our school to meet the students whose lives have been transformed."
        upperBtn="Schedule now "
      />
    </div>
  );
};

export default InfrastructurePage;
