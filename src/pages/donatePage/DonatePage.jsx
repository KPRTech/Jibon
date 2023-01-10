import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import { TfiAngleRight } from "react-icons/tfi";

const DonatePage = () => {
  let [jobsArr, setJobsArr] = useState([
    {
      title: "Sponsor a Child's Education",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          asdasdasdasd
        </div>
      ),
      status: true,
    },
    {
      title: "Breakfast, Arts, Sports, Health & Counseling ",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          asdasdasdasd
        </div>
      ),
      status: false,
    },
    {
      title: "Zakat to Educate a Student",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          asdasdasdasd
        </div>
      ),
      status: false,
    },
  ]);

  // Help us educate a child
  // $15 – One month of classes for a student at our reformed government schools
  // $500 – Textbooks, technology and other classroom aids for one school
  // Other Amount

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
      <HeroBanner
        title={"Donate Us"}
        heroTextOne={
          "Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Donate Us"}></BreadCrumb>

      {/* main contents */}
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between">
        <div className="lg:w-40% animate-[slideYTwo_1s_ease_1] rounded-lg px-6 py-4 border-[1px] border-[#333333]">
          <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
            HELP US REFORM PUBLIC EDUCATION ACROSS PAKISTAN
          </h2>

          <p className="font-rale text-sm text-secondary mt-2 mb-5">
            {" "}
            Donate today and transform students’ lives
          </p>

          <div>
            {jobsArr.map((item, index) => (
              <div className="font-time">
                <p
                  className="cursor-pointer font-mont font-bold mt-2 p-4 border-[1px] flex justify-start gap-x-2 items-center hover:bg-slate-200 active:bg-slate-300 linear duration-300"
                  onClick={() => handleJobs(index)}
                >
                  <TfiAngleRight
                    className={
                      item.status
                        ? "rotate-90 linear duration-300"
                        : "linear duration-300"
                    }
                  />
                  {item.title}
                </p>

                {item.status && item.details()}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-60% animate-[slideYTwo_1s_ease_1]">
          <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
            HELP US REFORM PUBLIC EDUCATION ACROSS PAKISTAN
          </h2>

          <p className="font-rale text-sm text-secondary mt-2 mb-5">
            {" "}
            Donate today and transform students’ lives
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
