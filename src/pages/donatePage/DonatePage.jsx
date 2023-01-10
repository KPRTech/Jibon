import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import { TfiAngleRight } from "react-icons/tfi";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import PrimaryButton from "../../components/PrimaryButton";
import OtherDonate from "../../components/otherDonate/OtherDonate";
import FeatureDonation from "../../components/FeatureDonation";
import AchievementHeader from "../../components/AchievementHeader";

const DonatePage = () => {
  let [jobsArr, setJobsArr] = useState([
    {
      title: "Sponsor a Child's Education",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Help us educate a child
          </p>
          <div>
            <p className="mb-2 cursor-pointer text-[15px] text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $15 – One month of classes for a student at our reformed
                government schools
              </span>
              <BsCheck2Circle className={"w-[1/5] text-3xl text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $500 – Textbooks, technology and other classroom aids for one
                school
              </span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5"> Other Amount</span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
          </div>
        </div>
      ),
      status: true,
    },
    {
      title: "Breakfast, Arts, Sports, Health & Counseling ",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Support our holistic programs to enrich a child's school experience
          </p>
          <div>
            <p className="mb-2 cursor-pointer text-[15px] text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <span className="w-4/5">
                $10 – sponsors one month of breakfast for one child{" "}
              </span>
              <BsCheck2Circle className={"w-[1/5] text-3xl text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $15 – One month of classes for a student at our reformed
                government schools
              </span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $500 – Textbooks, technology and other classroom aids for one
                school
              </span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5"> Other Amount</span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
          </div>
        </div>
      ),
      status: false,
    },
    {
      title: "Zakat to Educate a Student",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Sponsor the education of zakat-eligible students at our schools
          </p>
          <div>
            <p className="mb-2 cursor-pointer text-[15px] text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <span className="w-4/5">
                $30 – Sponsors one week of education for 10 students
              </span>
              <BsCheck2Circle className={"w-[1/5] text-3xl text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $15 – One month of classes for a student at our reformed
                government schools
              </span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5">
                {" "}
                $500 – Textbooks, technology and other classroom aids for one
                school
              </span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
            <p className="mb-2 cursor-pointer text-[15px] hover:text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-white hover:bg-primary linear duration-300">
              <span className="w-4/5"> Other Amount</span>
              <BsCircle className={"w-[1/5] text-2xl hover:text-white"} />
            </p>
          </div>
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
      <HeroBanner
        title={"Donate Us"}
        heroTextOne={
          "Zindagi Trust is a non-governmental, non-profit organization that strives to improve the quality of education."
        }
      ></HeroBanner>
      <BreadCrumb breadCrumbText={"Donate Us"}></BreadCrumb>

      {/* main contents */}
      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-28 gap-y-20 justify-between">
        {/* help us part */}
        <div className="lg:w-40% animate-[slideYTwo_1s_ease_1] rounded-lg px-6 py-4 border-[1px] border-[#333333]/30">
          <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
            HELP US REFORM PUBLIC EDUCATION ACROSS PAKISTAN
          </h2>

          <p className="font-rale text-sm text-secondary mt-2 mb-5">
            {" "}
            Donate today and transform students’ lives
          </p>

          <div className="mb-6">
            {jobsArr.map((item, index) => (
              <div className="font-time">
                <p
                  className="cursor-pointer text-[15px] font-mont font-bold mt-2 p-4 border-[1px] flex justify-start gap-x-2 items-center hover:bg-secondary/20  active:bg-slate-300 linear duration-300"
                  onClick={() => handleJobs(index)}
                >
                  <TfiAngleRight
                    className={
                      item.status
                        ? "text-primary w-[10%] text-lg rotate-90 linear duration-300"
                        : "text-primary w-[10%] text-lg linear duration-300"
                    }
                  />
                  <span className="w-[90%]">{item.title}</span>
                </p>

                {item.status && item.details()}
              </div>
            ))}

            <PrimaryButton
              children={"Next"}
              className={"ml-auto !text-base mt-8"}
            />
          </div>
        </div>
        {/* help us part */}

        {/* sponsor part */}
        <div className="lg:w-60% text-center flex flex-col items-center lg:w-4/5 animate-[slideYTwo_1s_ease_1]">
          <picture className="">
            <img
              src="assets/images/donate/donate1.jpg"
              className="rounded-lg"
              loading="lazy"
            />
          </picture>
          <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
            SPONSOR A CHILD'S EDUCATION
          </h2>

          <p className="font-rale text-base text-secondary mt-2 mb-5">
            {" "}
            Every child has a dream and deserves a chance to make these dreams
            come true. A holistic education empowers a child with the key to
            realizing her dreams. Sponsor quality education for a child in our
            government schools for one month, one year or a time period of your
            choice.
          </p>
          <PrimaryButton children={"Other Ways to donate"} />
          <p className="font-rale text-base text-secondary mt-4 mb-1">
            {" "}
            Having problems making a donation?
          </p>
          <p className="font-rale text-base text-secondary mt-1 mb-5">
            {" "}
            Email us at donate@zindagitrust.org or call at 111-111-439
          </p>

          <p className="font-rale text-xs italic text-secondary mt-8 mb-5">
            {" "}
            Donations to Zindagi Trust are tax-exempt in both Pakistan and in
            the United States. <br /> <strong> In USA:</strong> Zindagi Inc. is
            a 501 (3) (c) tax-exempt organization (No. 20-1287010), which grants
            funds that benefit Zindagi Trust, its schools and other charitable
            educational projects. In compliance with the IRS regulations, the
            Board of Trustees of Zindagi Inc. maintain complete discretion over
            allocation of gifts/funds to Zindagi Trust. <br />
            <strong> In Pakistan:</strong> Tax Exemption # CIT/COS.V/2007/499 &
            NTN Certificate # 1735920-1.
          </p>
        </div>
      </div>
      <FeatureDonation />
      <OtherDonate />

      <div className="lg:container mx-auto lg:px-24 px-6 pb-8 flex flex-col lg:flex-row gap-x-10 gap-y-20 justify-between ">
        <div className="lg:w-1/2">
          {" "}
          <AchievementHeader achiveHeader="HUMARAY SCHOOLS, HUMARA MUSTAQBIL" />
          <iframe
            className="lg:h-[40vw] w-full mt-12 m-auto"
            // width="100%"
            // height="558"
            src="https://www.youtube.com/embed/gQGjR6GBk-s"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="lg:w-1/2">
          {" "}
          <AchievementHeader achiveHeader="SHARIAH COMPLIANCE CERTIFICATE" />
          <picture className="">
            <img
              src="/assets/images/donate/cert.jpg"
              className="mt-12 m-auto w-2/3 lg:w-full lg:h-[40vw]"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
