import React from "react";
import AchievementHeader from "./AchievementHeader";
import PrimaryButton from "./PrimaryButton";

const FeatureDonation = () => {
  return (
    <div className="mx-24">
      <AchievementHeader
        achiveHeader="FEATURED PROGRAMS"
        achiveDescription="Our programs enrich the government school experience for students: we build the capacity of government teachers; teach weekly sports, art and chess classes; support student wellness through healthcare, daily meals and counseling; bring classroom innovation like technology enhanced learning in math."
      />
      <div className="container grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:py-12 py-4 px-4">
        <div className="border-2 hover:scale-[105%] linear duration-300">
          <a href="https://www.zindagitrust.org/donate/breakfast-and-health">
            {" "}
            <img
              className="hover:shadow-lg"
              src="/assets/images/donate/feature1.jpeg"
              alt=""
            />
          </a>
          <div className="text-center my-4">
            <h2 className="text-lg font-bold h-14">BREAKFAST & HEALTH</h2>
            <p className="text-gray-500 py-2 text-[15px]">
              Healthy, happy children learn better. Our work in Student Wellness
              includes: a nutritious Daily Breakfast for 400 students from KG to
              Class 2; basic healthcare.
            </p>
            <PrimaryButton className="mx-auto">Donate</PrimaryButton>
          </div>
        </div>
        <div className="border-2 hover:scale-[105%] linear duration-300">
          <a href="https://www.zindagitrust.org/donate/teacher-professional-development">
            {" "}
            <img
              className="hover:shadow-lg"
              src="/assets/images/donate/feature2.jpeg"
              alt=""
            />
          </a>
          <div className="text-center my-4">
            <h2 className="text-lg font-bold h-14">
              TEACHER PROFESSIONAL <br /> DEVELOPMENT
            </h2>
            <p className="text-gray-500 py-2 text-[15px]">
              Teachers are the key to a productive classroom. We have
              established a Teacher Professional Development team at each of our
              schools to invest in the capacity of the existing government
              teacher.
            </p>
            <PrimaryButton className="mx-auto">Donate</PrimaryButton>
          </div>
        </div>
        <div className="border-2 hover:scale-[105%] linear duration-300">
          <a href="https://www.zindagitrust.org/donate/sports">
            {" "}
            <img
              className="hover:shadow-lg"
              src="/assets/images/donate/feature3.jpeg"
              alt=""
            />
          </a>
          <div className="text-center my-4">
            <h2 className="text-lg font-bold h-14">SPORTS</h2>
            <p className="text-gray-500 py-2 text-[15px]">
              Sports promote physical fitness, alertness and better
              concentration, collaboration, self-esteem, and perseverance in
              children. Each of our schools features weekly sports classes for
              all students.
            </p>
            <PrimaryButton className="mx-auto">Donate</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDonation;
