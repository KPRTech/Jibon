import React from "react";
import HeroBanner from "../../components/HeroBanner";
import PrimaryButton from "../../components/PrimaryButton";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";
import { BsPlusLg } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

const CareerPage = () => {
  return (
    <div>
      {" "}
      <HeroBanner
        title={"Careers"}
        heroTextOne={"We are expanding our management team."}
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Careers"}></BreadCrumb>
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-20 gap-y-20 justify-between ">
        <div className="lg:w-[70%] animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-xl font-bold pb-4 mb-4 border-b-2">
            Job Opportunities at Zindagi Trust
          </h2>
          <p className="font-rale text-slate-700 mt-2 mb-5">
            Click on job title to view its details.
          </p>

          <div>
            <div className="font-time">
              <p className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center">
                Academic Officer <BsPlusLg className="" />
              </p>
              <div className="p-4 border-[1px] text-slate-700 leading-7">
                <p>
                  About Zindagi Trust <br /> Zindagi Trust works on improving
                  the quality of education available to the average Pakistani
                  child through pilot projects in school reform and policy
                  advocacy. It has transformed two government schools in Karachi
                  into model institutions and used the success of its work there
                  to impact thousands of government schools through policy
                  changes in school governance, child protection, etc.
                  <br /> The Trust’s vision for a successful school is one that
                  produces well-rounded citizens, not just students who score
                  A’s. To this end, it focuses on making classroom learning fun
                  but also on developing strong co-curricular programs and on
                  opening minds to new life and career choices. It has groomed
                  national and regional champions and high achievers in chess,
                  football, art, science, and youth leadership. Crucially, it
                  has empowered young women – from a section of society where
                  they are still marginalized – to enter professional and public
                  life.
                  <br /> Purpose and Scope:
                  <br /> The primary role of the Academic Officer is to ensure
                  that high-quality education interventions are imparted at the
                  schools. The incumbent will be expected to work with data in
                  order to advise senior management based on data-driven
                  decisions and strategies to improve the overall learning of
                  students and staff members. Work closely with PD (Professional
                  Development) Team and administrators to ensure that all
                  aspects of the School’s academic programs are running
                  successfully and smoothly.
                  <br />
                  The incumbent will report directly to the Chief Academic
                  Officer at Zindagi Trust while working closely with the school
                  staff and professional development teams. <br />{" "}
                  Responsibilities:
                  <br />
                  <br />{" "}
                  <span className="font-semibold flex justify-start gap-x-2 items-center">
                    {" "}
                    <ImPointRight />
                    Ensuring successful implementation of academic interventions
                  </span>{" "}
                  <ul className="list-disc ml-8 text-sm">
                    <li>
                      Assisting with the development and implementation of
                      academic programs and initiatives
                    </li>
                    <li>
                      Develop and monitor the execution of school’s annual
                      academic calendar.
                    </li>
                    <li>
                      Research various learning resources including library
                      books, curate and develop content that promotes hands on
                      learning.
                    </li>
                    <li>
                      Identify potential teaching/learning models used in the
                      same context and pilot in school to improve quality of
                      education.
                    </li>
                    <li>
                      Design and implement context relevant interventions for
                      integrating technology in teaching/learning.
                    </li>
                    <li>
                      Design remedial intervention plans in close liaison with
                      school teams that would improve student performance.
                    </li>
                  </ul>
                  Research & Analysis Analyze assessments/diagnostic tests of
                  students with the PD team and identify emerging patterns.
                  Identify areas for research which may include understanding
                  the effectiveness of implemented interventions Support in the
                  analysis of teacher improvement data with the PD team and
                  identify prioritized areas of development Present findings and
                  recommendations for improvement to School Management and HO.
                  Conduct needs analysis sessions with students to understand
                  areas of opportunity Stay abreast with government policy
                  shifts and trends that relate to ZT-managed schools.
                  Collaboration with external stakeholders Collaborate with
                  external academic stakeholders to implement academic
                  interventions Collaborate with the PD team to identify and
                  involve external partners/trainers as needed for teacher
                  professional development Liaison with government stakeholders
                  to ensure alignment of implemented interventions Required
                  Skills Proficiency in technology and MS Suite Knowledge of the
                  academic field: crucial to have a thorough understanding of
                  the field of education in the context of Pakistan. As well as
                  a familiarity with current trends and best practices in
                  education. This can help you to make informed decisions about
                  curriculum development and other academic matters. Excellent
                  communication skills: The incumbent needs to be able to
                  effectively communicate with a wide range of stakeholders,
                  including students, staff, and external partners. This may
                  involve presenting ideas and information in a clear and
                  concise manner, as well as listening actively and seeking to
                  understand the perspectives of others. Strong analytical and
                  problem-solving skills: As an academic officer, you will be
                  expected to analyze data and make decisions based on that
                  analysis. You should have strong analytical skills and be able
                  to approach problems in a logical, methodical way.
                  Adaptability: Should be able to adapt to new challenges and
                  circumstances as they arise. You should be able to think on
                  your feet and be comfortable with change and uncertainty.
                  Collaboration and teamwork: As an academic officer, you will
                  often be working with others to achieve shared goals. It is
                  important to be able to collaborate effectively with others
                  and to be a good team player. Experience Minimum 2 years of
                  relevant experience in education Location A full-time position
                  based in Karachi with frequent travel to ZT-managed schools in
                  Karachi How to apply: Prospective candidates should send their
                  CV to career@zindagitrust.org with a cover letter describing
                  how their previous experience fits within this role.
                </p>
              </div>
            </div>
            <div className="font-time">
              <p className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center">
                LSBE Lead <BsPlusLg className="" />
              </p>
            </div>
            <div className="font-time">
              <p className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center">
                Academic Coach ( Shangla ) <BsPlusLg className="" />
              </p>
            </div>
            <div className="font-time">
              <p className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center">
                Project Resource - Marketing and Comms Officer{" "}
                <BsPlusLg className="" />
              </p>
            </div>
          </div>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default CareerPage;
