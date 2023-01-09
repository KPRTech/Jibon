import React from "react";
import AchievementHeader from "../../components/AchievementHeader";
import HeroBanner from "../../components/HeroBanner";
import Content from "../../components/newProgram/Content";
import PrimaryButton from "../../components/PrimaryButton";

const NewProgramsPage = () => {
  return (
    <div>
      <HeroBanner
        title="New Programs"
        heroTextOne="For a holistic education, it is essential to develop teachers professionally and support the physical"
        heroTextTwo="and mental health of students via the right support and innovations in the curriculum.
        "
      />

      <div className="mx-auto w-[70%] mt-10">
        <div className="flex felx-row flex-wrap">
          <Content
            title="Teacher Professional Development"
            description="We have established Professional Development teams at each school, through which Subject Leads develop the capacity of government teachers, engaging them in regular training workshops, classroom observations, feedback and evaluation through one-on-one and group coaching."
            button={true}
          />
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/1.jpg"
            alt=""
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/2.jpg"
            alt=""
          />
          <Content
            title="Breakfast and Health"
            description="We provide nutritional, physical and mental health support to children at our government schools through our daily breakfast program, canteen guidance/monitoring, basic first aid and healthcare via the School Nurse, regular counseling by our full-time School Counselor as well as regular awareness workshops about disease prevention, mental hygiene, etc."
            button={true}
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <Content
            title="Art"
            description="We have established a strong art program at our government schools, featuring weekly art classes which cover a variety of basic and advanced techniques, different mediums, international and Pakistani art history, current local artists and art as an experience. In addition to weekly classes, students attend talks by guest speakers, visit art galleries and museums; create and experience public art through murals, and so on. Our government schools have put up impressive annual student art shows [Dawn, Tribune] and have also hosted stimulating creative discussions around Making Art Accessible and the Role of the Arts in Education. We continue to advocate to the government to introduce art in all its schools."
          />
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/3.jpg"
            alt=""
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/4.jpg"
            alt=""
          />
          <Content
            title="Sports"
            description="Our government schools have established sports programs featuring weekly sports classes, specialised coaching, annual sports days and many opportunities to compete in inter-house, inter-school, regional and even national competitions. Our students have excelled in football/futsal, cricket, volleyball, taekwondo, and athletics. Our school teams have won regional and national competitions against some of Pakistan's best elite private schools."
            button={true}
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <Content
            title="Mind Sports"
            description="Our government schools have established a mind sports program through which they teach chess and scrabble as part of the regular school day. These mind sports have honed the problem-solving and time management skills of our students which have in turn helped them develop confidence in their abilities to tackle challenges in class, in the exam hall and beyond."
          />
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/5.jpg"
            alt=""
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/6.jpg"
            alt=""
          />
          <Content
            title="Life Skills Based Education (LSBE)"
            description="Our government schools have pioneered the teaching of the Life Skills Based Education curriculum developed by Aahung, which empowers children to recognise and protect themselves against physical and sexual abuse, disease, poor hygiene, nutritional inequality or insufficiency and other rights violations. SMB Fatima Jinnah School was highlighted as a case study for the model implementation of LSBE which enabled us to advocate for the program to be integrated into the provincial curricula."
          />
        </div>
        <div className="flex felx-row flex-wrap">
          <Content
            title="Summer Camp"
            description="Our government schools feature a Summer Camp run by volunteers who create their own one-day classes, workshops, career talks or presentations for our students. Our students have learned from journalists, sportswomen, scientists, filmmakers, fitness trainers and enjoyed guest talks and lessons on a variety of topics ranging from environment to reinterpreting Iqbal's poetry. Head to our Volunteer section to sign up for this year's camp, from June 17th to 27th!"
          />
          <img
            className="w-[45%]"
            src="/assets/images/newProgram/7.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-20 mb-20">
        <hr />
      </div>
      <div className="mx-auto w-[70%] mt-10">
        <AchievementHeader achiveHeader="OTHER WAYS TO DONATE" />
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 mb-10">
          <div className="w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon1.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon2.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon3.jpg"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>

          <div className="w-[20%] text-center">
            <img
              className="mx-auto"
              src="/assets/images/newProgram/icon4.png"
              alt=""
            />
            <h3 className="font-mont text-xl font-bold">CHEQUE</h3>
            <p className="ont-mont text-[#818181] font-thin mt-5">
              Mail a cheque to our offices in Pakistan or the United States
            </p>
            <PrimaryButton children="DONATE NOW" className="mx-auto mt-5" />
            <div className="mt-5 mb-5">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProgramsPage;
