import React from "react";
import HeroBanner from "../../components/HeroBanner";
import MakeDonation from "../../components/MakeDonation/MakeDonation";

const AcademicsPage = () => {
  return (
    <div>
      <HeroBanner
        title="Academics"
        heroTextOne="Ever since our adoption of them, these government schools have shown remarkable improvement in their passing rate."
        heroTextTwo=""
      />

      <div className="w-[70%] mx-auto">
        <div className="text-center mt-10 mb-10">
          <span className="font-rale text-slate-700">
            Jump To <span className="text-sm">&#62;&#62; </span>
          </span>
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            New Academic Programs
          </a>{" "}
          |{" "}
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            {" "}
            New Academic Facilities
          </a>{" "}
          |{" "}
          <a className="font-rale text-[#FF6400] text-md font-bold" href="">
            {" "}
            Board Exam Results
          </a>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          <div className="w-[700px]">
            <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
              NEW ACADEMIC PROGRAMS
            </h2>
            <div className="mt-2 mb-2">
              <hr />
            </div>
            <p className="font-rale text-slate-700 text-base leading-loose mt-2">
              We have established new academic programs at the school which are
              delivered through existing government teachers. One such example
              is the teaching of Math in a technology-blended classroom through
              EdeEqual, a blended learning software. The program gives each
              student individual access to video lectures, guided practice and
              assessments on their own computer.
              <br />
              <br /> The program has drastically improved Math scores. On
              average, students mastered one year’s worth of instructional
              material in 3.5 months. The program is being used for Maths
              instruction in Grades 5, 6 and 7.
            </p>
          </div>
          <img
            className="w-[460px] h-[310px]"
            src="/assets/images/academicsPage/academic-new2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-20 mb-20">
        <hr />
      </div>

      <div className="text-center">
        <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
          NEW ACADEMIC FACILITIES
        </h2>
        <p className="font-rale text-slate-700 text-base leading-loose mt-2">
          We have added purpose-built modern facilities to enhance the learning
          experience at our government schools. These include:
        </p>
      </div>

      <div className="w-[70%] mx-auto mt-10">
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <div className="w-[330px] mt-10">
            <h2 className="font-mont text-[#FF6400] text-xl font-bold">
              AUDITORIUM
            </h2>
            <img src="/assets/images/academicsPage/1.jpg" alt="" />
            <p className="font-rale text-slate-700 text-base leading-loose mt-5">
              An Auditorium with Audio/Visual (A/V) facility which is used by
              teachers to make their lessons richer
            </p>
          </div>

          <div className="w-[330px] mt-10">
            <h2 className="font-mont text-[#FF6400] text-xl font-bold">
              AUDITORIUM
            </h2>
            <img src="/assets/images/academicsPage/2.jpg" alt="" />
            <p className="font-rale text-slate-700 text-base leading-loose mt-5">
              An Auditorium with Audio/Visual (A/V) facility which is used by
              teachers to make their lessons richer
            </p>
          </div>

          <div className="w-[330px] mt-10">
            <h2 className="font-mont text-[#FF6400] text-xl font-bold">
              AUDITORIUM
            </h2>
            <img src="/assets/images/academicsPage/3.jpg" alt="" />
            <p className="font-rale text-slate-700 text-base leading-loose mt-5">
              An Auditorium with Audio/Visual (A/V) facility which is used by
              teachers to make their lessons richer
            </p>
          </div>

          <div className="w-[330px] mt-10">
            <h2 className="font-mont text-[#FF6400] text-xl font-bold">
              AUDITORIUM
            </h2>
            <img src="/assets/images/academicsPage/4.jpg" alt="" />
            <p className="font-rale text-slate-700 text-base leading-loose mt-5">
              An Auditorium with Audio/Visual (A/V) facility which is used by
              teachers to make their lessons richer
            </p>
          </div>

          <div className="w-[330px] mt-10">
            <h2 className="font-mont text-[#FF6400] text-xl font-bold">
              AUDITORIUM
            </h2>
            <img src="/assets/images/academicsPage/5.jpg" alt="" />
            <p className="font-rale text-slate-700 text-base leading-loose mt-5">
              An Auditorium with Audio/Visual (A/V) facility which is used by
              teachers to make their lessons richer
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20">
        <hr />
      </div>

      <div className="w-[70% mx-auto]">
        <div className="mt-20 lg:mx-24 mx-6">
          <div className="mx-auto text-center py-12">
            <h2 className="text-mont text-2xl font-bold text-[#FF6400]">
              BOARD EXAM RESULTS
            </h2>
            <h4 className="font-rale text-gray-700 text-sm">
              Our Board Exam Result Comparision
            </h4>
          </div>
          <div>
            <h2 className="text-mont text-2xl text-center mb-10 font-bold text-[#FF6400]">
              SSC BOARD EXAM RESULTS - GRADE 10
            </h2>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-20">
            <div className="w-[400px]">
              <img
                className="mx-auto"
                src="/assets/images/academicsPage/result1.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold text-center text-[#FF6400]">
                SMB FATIMA JINNAH GOVERNMENT GIRLS SCHOOL
              </h2>
              <div className="mt-6">
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/green.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    After Adoption (2017-2018)
                  </h3>
                </div>
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/red.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    Before Adoption (2006-2007)
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-[400px]">
              <img
                className="mx-auto"
                src="/assets/images/academicsPage/result2.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold text-center text-[#FF6400]">
                KHATOON-E-PAKISTAN GOVERNMENT GIRLS SCHOOL
              </h2>
              <div className="mt-6">
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/green.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    After Adoption (2017-2018)
                  </h3>
                </div>
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/red.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    Before Adoption (2015-2016)
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-mont text-2xl text-center mt-20 mb-10 font-bold text-[#FF6400]">
              SSC BOARD EXAM RESULTS - GRADE 9
            </h2>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-20">
            <div className="w-[400px]">
              <img
                className="mx-auto"
                src="/assets/images/academicsPage/result3.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold text-center text-[#FF6400]">
                SMB FATIMA JINNAH GOVERNMENT GIRLS SCHOOL
              </h2>
              <div className="mt-6">
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/green.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    After Adoption (2017-2018)
                  </h3>
                </div>
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/red.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    Before Adoption (2006-2007)
                  </h3>
                </div>
              </div>
            </div>

            <div className="w-[400px]">
              <img
                className="mx-auto"
                src="/assets/images/academicsPage/result4.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold text-center text-[#FF6400]">
                KHATOON-E-PAKISTAN GOVERNMENT GIRLS SCHOOL
              </h2>
              <div className="mt-6">
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/green.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    After Adoption (2017-2018)
                  </h3>
                </div>
                <div className="flex gap-2 justify-center">
                  <img
                    className="w-[22px] h-[20px]"
                    src="/assets/images/khatoone pakistan/red.jpg"
                    alt=""
                  />
                  <h3 className="font-bold text-gray-800">
                    Before Adoption (2015-2016)
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <MakeDonation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
