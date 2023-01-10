import React, { useState, Fraction } from "react";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import VolunteerSidebar from "../../components/volunteerSidebar/VolunteerSidebar";
import { BsPlusLg } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

const CareerPage = () => {
  let [jobsArr, setJobsArr] = useState([
    {
      title: "Academic Officer",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              About Zindagi Trust
            </span>{" "}
            Zindagi Trust works on improving the quality of education available
            to the average Pakistani child through pilot projects in school
            reform and policy advocacy. It has transformed two government
            schools in Karachi into model institutions and used the success of
            its work there to impact thousands of government schools through
            policy changes in school governance, child protection, etc.
            <br /> The Trust’s vision for a successful school is one that
            produces well-rounded citizens, not just students who score A’s. To
            this end, it focuses on making classroom learning fun but also on
            developing strong co-curricular programs and on opening minds to new
            life and career choices. It has groomed national and regional
            champions and high achievers in chess, football, art, science, and
            youth leadership. Crucially, it has empowered young women – from a
            section of society where they are still marginalized – to enter
            professional and public life.
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Job title:
            </span>{" "}
            Academic Officer
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Purpose and Scope:
            </span>{" "}
            The primary role of the Academic Officer is to ensure that
            high-quality education interventions are imparted at the schools.
            The incumbent will be expected to work with data in order to advise
            senior management based on data-driven decisions and strategies to
            improve the overall learning of students and staff members. Work
            closely with PD (Professional Development) Team and administrators
            to ensure that all aspects of the School’s academic programs are
            running successfully and smoothly.
            <br />
            The incumbent will report directly to the Chief Academic Officer at
            Zindagi Trust while working closely with the school staff and
            professional development teams. <br />{" "}
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Responsibilities:
            </span>{" "}
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Ensuring successful implementation of academic interventions
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Assisting with the development and implementation of academic
                programs and initiatives
              </li>
              <li>
                Develop and monitor the execution of school’s annual academic
                calendar.
              </li>
              <li>
                Research various learning resources including library books,
                curate and develop content that promotes hands on learning.
              </li>
              <li>
                Identify potential teaching/learning models used in the same
                context and pilot in school to improve quality of education.
              </li>
              <li>
                Design and implement context relevant interventions for
                integrating technology in teaching/learning.
              </li>
              <li>
                Design remedial intervention plans in close liaison with school
                teams that would improve student performance.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Research & Analysis
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Analyze assessments/diagnostic tests of students with the PD
                team and identify emerging patterns.
              </li>
              <li>
                Identify areas for research which may include understanding the
                effectiveness of implemented interventions
              </li>
              <li>
                Support in the analysis of teacher improvement data with the PD
                team and identify prioritized areas of development.
              </li>
              <li>
                Present findings and recommendations for improvement to School
                Management and HO.
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
              <li>
                Stay abreast with government policy shifts and trends that
                relate to ZT-managed schools.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Collaboration with external stakeholders
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Collaborate with external academic stakeholders to implement
                academic interventions
              </li>
              <li>
                Collaborate with the PD team to identify and involve external
                partners/trainers as needed for teacher professional development
              </li>
              <li>
                Liaison with government stakeholders to ensure alignment of
                implemented interventions
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Required Skills
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                <li>Proficiency in technology and MS Suite</li>
              </li>
              <li>
                Knowledge of the academic field: crucial to have a thorough
                understanding of the field of education in the context of
                Pakistan. As well as a familiarity with current trends and best
                practices in education. This can help you to make informed
                decisions about curriculum development and other academic
                matters.
              </li>
              <li>
                Excellent communication skills: The incumbent needs to be able
                to effectively communicate with a wide range of stakeholders,
                including students, staff, and external partners. This may
                involve presenting ideas and information in a clear and concise
                manner, as well as listening actively and seeking to understand
                the perspectives of others.
              </li>
              <li>
                {" "}
                Strong analytical and problem-solving skills: As an academic
                officer, you will be expected to analyze data and make decisions
                based on that analysis. You should have strong analytical skills
                and be able to approach problems in a logical, methodical way.
              </li>
              <li>
                Adaptability: Should be able to adapt to new challenges and
                circumstances as they arise. You should be able to think on your
                feet and be comfortable with change and uncertainty.
              </li>
              <li>
                Collaboration and teamwork: As an academic officer, you will
                often be working with others to achieve shared goals. It is
                important to be able to collaborate effectively with others and
                to be a good team player.
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Experience:
            </span>{" "}
            - Minimum 2 years of relevant experience in education
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Location:
            </span>{" "}
            A full-time position based in Karachi with frequent travel to
            ZT-managed schools in Karachi
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              How to apply:
            </span>{" "}
            Prospective candidates should send their CV to
            career@zindagitrust.org with a cover letter describing how their
            previous experience fits within this role.
          </p>
        </div>
      ),
      status: false,
    },
    {
      title: "LSBE Lead",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              About Zindagi Trust
            </span>{" "}
            Zindagi Trust works on improving the quality of education available
            to the average Pakistani child through pilot projects in school
            reform and policy advocacy. It has transformed two government
            schools in Karachi into model institutions and used the success of
            its work there to impact thousands of government schools through
            policy changes in school governance, child protection, etc.
            <br /> The Trust’s vision for a successful school is one that
            produces well-rounded citizens, not just students who score A’s. To
            this end, it focuses on making classroom learning fun but also on
            developing strong co-curricular programs and on opening minds to new
            life and career choices. It has groomed national and regional
            champions and high achievers in chess, football, art, science, and
            youth leadership. Crucially, it has empowered young women – from a
            section of society where they are still marginalized – to enter
            professional and public life.
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Job title:
            </span>{" "}
            Academic Officer
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Purpose and Scope:
            </span>{" "}
            The primary role of the Academic Officer is to ensure that
            high-quality education interventions are imparted at the schools.
            The incumbent will be expected to work with data in order to advise
            senior management based on data-driven decisions and strategies to
            improve the overall learning of students and staff members. Work
            closely with PD (Professional Development) Team and administrators
            to ensure that all aspects of the School’s academic programs are
            running successfully and smoothly.
            <br />
            The incumbent will report directly to the Chief Academic Officer at
            Zindagi Trust while working closely with the school staff and
            professional development teams. <br />{" "}
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Responsibilities:
            </span>{" "}
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Ensuring successful implementation of academic interventions
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Assisting with the development and implementation of academic
                programs and initiatives
              </li>
              <li>
                Develop and monitor the execution of school’s annual academic
                calendar.
              </li>
              <li>
                Research various learning resources including library books,
                curate and develop content that promotes hands on learning.
              </li>
              <li>
                Identify potential teaching/learning models used in the same
                context and pilot in school to improve quality of education.
              </li>
              <li>
                Design and implement context relevant interventions for
                integrating technology in teaching/learning.
              </li>
              <li>
                Design remedial intervention plans in close liaison with school
                teams that would improve student performance.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Research & Analysis
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Analyze assessments/diagnostic tests of students with the PD
                team and identify emerging patterns.
              </li>
              <li>
                Identify areas for research which may include understanding the
                effectiveness of implemented interventions
              </li>
              <li>
                Support in the analysis of teacher improvement data with the PD
                team and identify prioritized areas of development.
              </li>
              <li>
                Present findings and recommendations for improvement to School
                Management and HO.
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
              <li>
                Stay abreast with government policy shifts and trends that
                relate to ZT-managed schools.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Collaboration with external stakeholders
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Collaborate with external academic stakeholders to implement
                academic interventions
              </li>
              <li>
                Collaborate with the PD team to identify and involve external
                partners/trainers as needed for teacher professional development
              </li>
              <li>
                Liaison with government stakeholders to ensure alignment of
                implemented interventions
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Required Skills
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                <li>Proficiency in technology and MS Suite</li>
              </li>
              <li>
                Knowledge of the academic field: crucial to have a thorough
                understanding of the field of education in the context of
                Pakistan. As well as a familiarity with current trends and best
                practices in education. This can help you to make informed
                decisions about curriculum development and other academic
                matters.
              </li>
              <li>
                Excellent communication skills: The incumbent needs to be able
                to effectively communicate with a wide range of stakeholders,
                including students, staff, and external partners. This may
                involve presenting ideas and information in a clear and concise
                manner, as well as listening actively and seeking to understand
                the perspectives of others.
              </li>
              <li>
                {" "}
                Strong analytical and problem-solving skills: As an academic
                officer, you will be expected to analyze data and make decisions
                based on that analysis. You should have strong analytical skills
                and be able to approach problems in a logical, methodical way.
              </li>
              <li>
                Adaptability: Should be able to adapt to new challenges and
                circumstances as they arise. You should be able to think on your
                feet and be comfortable with change and uncertainty.
              </li>
              <li>
                Collaboration and teamwork: As an academic officer, you will
                often be working with others to achieve shared goals. It is
                important to be able to collaborate effectively with others and
                to be a good team player.
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Experience:
            </span>{" "}
            - Minimum 2 years of relevant experience in education
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Location:
            </span>{" "}
            A full-time position based in Karachi with frequent travel to
            ZT-managed schools in Karachi
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              How to apply:
            </span>{" "}
            Prospective candidates should send their CV to
            career@zindagitrust.org with a cover letter describing how their
            previous experience fits within this role.
          </p>
        </div>
      ),
      status: false,
    },
    {
      title: "Academic Coach ( Shangla )",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              About Zindagi Trust
            </span>{" "}
            Zindagi Trust works on improving the quality of education available
            to the average Pakistani child through pilot projects in school
            reform and policy advocacy. It has transformed two government
            schools in Karachi into model institutions and used the success of
            its work there to impact thousands of government schools through
            policy changes in school governance, child protection, etc.
            <br /> The Trust’s vision for a successful school is one that
            produces well-rounded citizens, not just students who score A’s. To
            this end, it focuses on making classroom learning fun but also on
            developing strong co-curricular programs and on opening minds to new
            life and career choices. It has groomed national and regional
            champions and high achievers in chess, football, art, science, and
            youth leadership. Crucially, it has empowered young women – from a
            section of society where they are still marginalized – to enter
            professional and public life.
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Job title:
            </span>{" "}
            Academic Officer
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Purpose and Scope:
            </span>{" "}
            The primary role of the Academic Officer is to ensure that
            high-quality education interventions are imparted at the schools.
            The incumbent will be expected to work with data in order to advise
            senior management based on data-driven decisions and strategies to
            improve the overall learning of students and staff members. Work
            closely with PD (Professional Development) Team and administrators
            to ensure that all aspects of the School’s academic programs are
            running successfully and smoothly.
            <br />
            The incumbent will report directly to the Chief Academic Officer at
            Zindagi Trust while working closely with the school staff and
            professional development teams. <br />{" "}
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Responsibilities:
            </span>{" "}
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Ensuring successful implementation of academic interventions
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Assisting with the development and implementation of academic
                programs and initiatives
              </li>
              <li>
                Develop and monitor the execution of school’s annual academic
                calendar.
              </li>
              <li>
                Research various learning resources including library books,
                curate and develop content that promotes hands on learning.
              </li>
              <li>
                Identify potential teaching/learning models used in the same
                context and pilot in school to improve quality of education.
              </li>
              <li>
                Design and implement context relevant interventions for
                integrating technology in teaching/learning.
              </li>
              <li>
                Design remedial intervention plans in close liaison with school
                teams that would improve student performance.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Research & Analysis
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Analyze assessments/diagnostic tests of students with the PD
                team and identify emerging patterns.
              </li>
              <li>
                Identify areas for research which may include understanding the
                effectiveness of implemented interventions
              </li>
              <li>
                Support in the analysis of teacher improvement data with the PD
                team and identify prioritized areas of development.
              </li>
              <li>
                Present findings and recommendations for improvement to School
                Management and HO.
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
              <li>
                Stay abreast with government policy shifts and trends that
                relate to ZT-managed schools.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Collaboration with external stakeholders
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Collaborate with external academic stakeholders to implement
                academic interventions
              </li>
              <li>
                Collaborate with the PD team to identify and involve external
                partners/trainers as needed for teacher professional development
              </li>
              <li>
                Liaison with government stakeholders to ensure alignment of
                implemented interventions
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Required Skills
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                <li>Proficiency in technology and MS Suite</li>
              </li>
              <li>
                Knowledge of the academic field: crucial to have a thorough
                understanding of the field of education in the context of
                Pakistan. As well as a familiarity with current trends and best
                practices in education. This can help you to make informed
                decisions about curriculum development and other academic
                matters.
              </li>
              <li>
                Excellent communication skills: The incumbent needs to be able
                to effectively communicate with a wide range of stakeholders,
                including students, staff, and external partners. This may
                involve presenting ideas and information in a clear and concise
                manner, as well as listening actively and seeking to understand
                the perspectives of others.
              </li>
              <li>
                {" "}
                Strong analytical and problem-solving skills: As an academic
                officer, you will be expected to analyze data and make decisions
                based on that analysis. You should have strong analytical skills
                and be able to approach problems in a logical, methodical way.
              </li>
              <li>
                Adaptability: Should be able to adapt to new challenges and
                circumstances as they arise. You should be able to think on your
                feet and be comfortable with change and uncertainty.
              </li>
              <li>
                Collaboration and teamwork: As an academic officer, you will
                often be working with others to achieve shared goals. It is
                important to be able to collaborate effectively with others and
                to be a good team player.
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Experience:
            </span>{" "}
            - Minimum 2 years of relevant experience in education
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Location:
            </span>{" "}
            A full-time position based in Karachi with frequent travel to
            ZT-managed schools in Karachi
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              How to apply:
            </span>{" "}
            Prospective candidates should send their CV to
            career@zindagitrust.org with a cover letter describing how their
            previous experience fits within this role.
          </p>
        </div>
      ),
      status: false,
    },
    {
      title: "Project Resource - Marketing and Comms Officer",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              About Zindagi Trust
            </span>{" "}
            Zindagi Trust works on improving the quality of education available
            to the average Pakistani child through pilot projects in school
            reform and policy advocacy. It has transformed two government
            schools in Karachi into model institutions and used the success of
            its work there to impact thousands of government schools through
            policy changes in school governance, child protection, etc.
            <br /> The Trust’s vision for a successful school is one that
            produces well-rounded citizens, not just students who score A’s. To
            this end, it focuses on making classroom learning fun but also on
            developing strong co-curricular programs and on opening minds to new
            life and career choices. It has groomed national and regional
            champions and high achievers in chess, football, art, science, and
            youth leadership. Crucially, it has empowered young women – from a
            section of society where they are still marginalized – to enter
            professional and public life.
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Job title:
            </span>{" "}
            Academic Officer
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Purpose and Scope:
            </span>{" "}
            The primary role of the Academic Officer is to ensure that
            high-quality education interventions are imparted at the schools.
            The incumbent will be expected to work with data in order to advise
            senior management based on data-driven decisions and strategies to
            improve the overall learning of students and staff members. Work
            closely with PD (Professional Development) Team and administrators
            to ensure that all aspects of the School’s academic programs are
            running successfully and smoothly.
            <br />
            The incumbent will report directly to the Chief Academic Officer at
            Zindagi Trust while working closely with the school staff and
            professional development teams. <br />{" "}
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Responsibilities:
            </span>{" "}
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Ensuring successful implementation of academic interventions
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Assisting with the development and implementation of academic
                programs and initiatives
              </li>
              <li>
                Develop and monitor the execution of school’s annual academic
                calendar.
              </li>
              <li>
                Research various learning resources including library books,
                curate and develop content that promotes hands on learning.
              </li>
              <li>
                Identify potential teaching/learning models used in the same
                context and pilot in school to improve quality of education.
              </li>
              <li>
                Design and implement context relevant interventions for
                integrating technology in teaching/learning.
              </li>
              <li>
                Design remedial intervention plans in close liaison with school
                teams that would improve student performance.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Research & Analysis
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Analyze assessments/diagnostic tests of students with the PD
                team and identify emerging patterns.
              </li>
              <li>
                Identify areas for research which may include understanding the
                effectiveness of implemented interventions
              </li>
              <li>
                Support in the analysis of teacher improvement data with the PD
                team and identify prioritized areas of development.
              </li>
              <li>
                Present findings and recommendations for improvement to School
                Management and HO.
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
              <li>
                Stay abreast with government policy shifts and trends that
                relate to ZT-managed schools.
              </li>
            </ul>
            <span className="text-primary mt-3 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              <ImPointRight />
              Collaboration with external stakeholders
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                Collaborate with external academic stakeholders to implement
                academic interventions
              </li>
              <li>
                Collaborate with the PD team to identify and involve external
                partners/trainers as needed for teacher professional development
              </li>
              <li>
                Liaison with government stakeholders to ensure alignment of
                implemented interventions
              </li>
              <li>
                Conduct needs analysis sessions with students to understand
                areas of opportunity
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Required Skills
            </span>{" "}
            <ul className="list-disc ml-8 text-sm">
              <li>
                <li>Proficiency in technology and MS Suite</li>
              </li>
              <li>
                Knowledge of the academic field: crucial to have a thorough
                understanding of the field of education in the context of
                Pakistan. As well as a familiarity with current trends and best
                practices in education. This can help you to make informed
                decisions about curriculum development and other academic
                matters.
              </li>
              <li>
                Excellent communication skills: The incumbent needs to be able
                to effectively communicate with a wide range of stakeholders,
                including students, staff, and external partners. This may
                involve presenting ideas and information in a clear and concise
                manner, as well as listening actively and seeking to understand
                the perspectives of others.
              </li>
              <li>
                {" "}
                Strong analytical and problem-solving skills: As an academic
                officer, you will be expected to analyze data and make decisions
                based on that analysis. You should have strong analytical skills
                and be able to approach problems in a logical, methodical way.
              </li>
              <li>
                Adaptability: Should be able to adapt to new challenges and
                circumstances as they arise. You should be able to think on your
                feet and be comfortable with change and uncertainty.
              </li>
              <li>
                Collaboration and teamwork: As an academic officer, you will
                often be working with others to achieve shared goals. It is
                important to be able to collaborate effectively with others and
                to be a good team player.
              </li>
            </ul>
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Experience:
            </span>{" "}
            - Minimum 2 years of relevant experience in education
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              Location:
            </span>{" "}
            A full-time position based in Karachi with frequent travel to
            ZT-managed schools in Karachi
            <span className="text-xl mb-1 text-primary mt-5 font-semibold flex justify-start gap-x-2 items-center">
              {" "}
              How to apply:
            </span>{" "}
            Prospective candidates should send their CV to
            career@zindagitrust.org with a cover letter describing how their
            previous experience fits within this role.
          </p>
        </div>
      ),
      status: false,
    },
  ]);

  const handleJobs = (clickIndex) => {
    jobsArr.map((item, index) => {
      if (index == clickIndex) {
        item.status = !item.status;
      } else {
        item.status = false;
      }
      setJobsArr([...jobsArr]);
    });
  };

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
          <h2 className="font-mont text-xl text-primary font-bold pb-4 mb-4 border-b-2">
            Job Opportunities at Zindagi Trust
          </h2>
          <p className="font-rale text-secondary mt-2 mb-5">
            Click on job title to view its details.
          </p>

          <div>
            {jobsArr.map((item, index) => (
              <div className="font-time">
                <p
                  className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-between items-center hover:bg-slate-200 active:bg-slate-300 linear duration-300"
                  onClick={() => handleJobs(index)}
                >
                  {item.title}{" "}
                  <BsPlusLg
                    className={
                      item.status
                        ? "rotate-45 linear duration-300"
                        : "linear duration-300"
                    }
                  />
                </p>

                {item.status && item.details()}
              </div>
            ))}
          </div>
        </div>
        <VolunteerSidebar className={"lg:w-[30%]"} />
      </div>
    </div>
  );
};

export default CareerPage;
