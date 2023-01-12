import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import BreadCrumb from "../../components/ui/BreadCrumb";
import { TfiAngleRight } from "react-icons/tfi";
import PrimaryButton from "../../components/PrimaryButton";
import OtherDonate from "../../components/otherDonate/OtherDonate";
import FeatureDonation from "../../components/FeatureDonation";
import AchievementHeader from "../../components/AchievementHeader";
import "./donatePage.css";

const DonatePage = () => {
  let [indexNum, setIndexNum] = useState(0);

  let [donateOptionsArr, setDonateOptionsArr] = useState([
    {
      title: "Sponsor a Child's Education",
      details: () => (
        <div className="p-4 border-[1px] text-secondary leading-7 animate-[popDownTwo_.4s_ease_1]">
          <p className="font-rale text-sm text-primary font-semibold mt-2 mb-5">
            {" "}
            Help us educate a child
          </p>
          <div>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={15}
                checked
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $15 – One month of classes for a student at our reformed
                government schools
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={500}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $500 – Textbooks, technology and other classroom aids for one
                school
              </label>
            </p>

            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
              type={"number"}
              placeholder={"Enter other amount ($)"}
            />
          </div>
          <button
            className={`uppercase text-white bg-[#FF6400] text-sm font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center ml-auto mt-8`}
          >
            Next
          </button>
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
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={10}
                checked
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $10 – sponsors one month of breakfast for one child{" "}
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={100}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $100 – Supports Sports & Arts activities for a class of 30
                students for one academic term
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
              type={"number"}
              placeholder={"Enter other amount ($)"}
            />
          </div>
          <button
            className={`uppercase text-white bg-[#FF6400] text-sm font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center ml-auto mt-8`}
          >
            Next
          </button>
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
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu1"
                type={"radio"}
                className={"hidden"}
                value={30}
                checked
              />
              <label
                id="eduLabel1"
                for={"edu1"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $30 – Sponsors one week of education for 10 students
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu2"
                type={"radio"}
                className={"hidden"}
                value={100}
              />
              <label
                id="eduLabel2"
                for={"edu2"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                $100 – Sponsors one week of education for 10 students
              </label>
            </p>
            <p className="mb-2 relative h-16 cursor-pointer text-sm text-white font-mont p-2 px-4 border-[1px] flex justify-between gap-x-2 items-center bg-primary/80 hover:bg-primary linear duration-300">
              <input
                name="amount"
                id="edu3"
                type={"radio"}
                className={"hidden"}
                value={0}
              />
              <label
                id="eduLabel3"
                for={"edu3"}
                className="w-4/5 cursor-pointer after:h-6 after:w-6 after:bg-white/60 after:content-[''] after:absolute after:right-[22px] after:top-[20px] after:rounded-full after:border-[4px] after:border-[#fff] after:p-1 after:linear linear after:duration-300 duration-300"
              >
                {" "}
                Other Amount
              </label>
            </p>
            <input
              name="otherAmount"
              className="px-4 py-3.5 text-sm border-[1px] border-[#333333]/40 outline-0 focus:border-[#333333] linear duration-300"
              type={"number"}
              placeholder={"Enter other amount ($)"}
            />
          </div>
          <button
            className={`uppercase text-white bg-[#FF6400] text-sm font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center ml-auto mt-8`}
          >
            Next
          </button>
        </div>
      ),
      status: false,
    },
  ]);

  let [donateDespArr, setDonateDespArr] = useState([
    {
      title: `SPONSOR A CHILD'S EDUCATION`,
      desp: `Every child has a dream and deserves a chance to make these dreams come true. A holistic education empowers a child with the key to realizing her dreams. Sponsor quality education for a child in our government schools for one month, one year or a time period of your choice.`,
      imgSrc: "/assets/images/donate/donate1.jpg",
    },
    {
      title: `Breakfast, Arts, Sports, Health & Counseling`,
      desp: `There are many athletes, artists, and geniuses hiding undiscovered in our government schools. We bring a diverse array of holistic education to our schools – sports, art, chess, life skills, guest talks and summer camps. Support us to enrich the government school experience for these young children so that they can reach their full potential and transform their lives.`,
      imgSrc: "/assets/images/donate/donate2.jpg",
    },
    {
      title: `Zakat for Education`,
      desp: `A holistic school education can truly transform an individual’s life. Zindagi Trust is certified as Shariah compliant in its management of zakat – our school management teams determine zakat eligibility of students based on a thorough training after which cases are vetted by our Shariah advisor. Support the complete education of a child (including classes, textbooks and lab/co-curricular costs) by donating your zakat today.`,
      imgSrc: "/assets/images/donate/donate3.jpeg",
    },
  ]);

  const handleJobs = (clickIndex) => {
    setIndexNum(clickIndex);
    donateOptionsArr.map((item, index) => {
      if (index == clickIndex) {
        item.status = !item.status;
      } else {
        item.status = false;
      }
      setDonateOptionsArr([...donateOptionsArr]);
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
            {donateOptionsArr.map((item, index) => (
              <form>
                <div className="font-time">
                  <p
                    className="cursor-pointer text-sm font-mont font-bold mt-2 p-4 border-[1px] flex justify-start gap-x-2 items-center hover:bg-secondary/20  active:bg-slate-300 linear duration-300"
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
              </form>
            ))}
          </div>
        </div>
        {/* help us part */}

        {/* sponsor part */}
        <div className="lg:w-60% text-center lg:text-left flex flex-col items-center lg:items-start lg:w-4/5 animate-[slideYTwo_1s_ease_1]">
          {donateDespArr.map(
            (item, index) =>
              index === indexNum && (
                <div>
                  <picture className="">
                    <img
                      src={item.imgSrc}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </picture>
                  <h2 className="font-mont text-2xl text-secondary font-bold pb-3 mb-6 mt-5 border-b-2">
                    {item.title}
                  </h2>

                  <p className="font-rale text-base text-secondary mt-2 mb-5">
                    {item.desp}
                  </p>
                </div>
              )
          )}

          <a href="#otherDonate">
            <button
              className={`uppercase text-white bg-[#FF6400] text-xs font-mont font-semibold py-2 px-3 rounded hover:bg-orange-700 duration-300 flex items-center`}
            >
              Other Ways to donate
            </button>
          </a>
          <p className="font-rale text-base text-secondary mt-4 mb-1">
            {" "}
            Having problems making a donation?
          </p>
          <p className="font-rale text-base text-secondary mt-1 mb-2">
            {" "}
            Email us at donate@zindagitrust.org or call at 111-111-439
          </p>

          <p className="font-rale text-xs leading-5 italic text-secondary mt-8 mb-5">
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
      <OtherDonate id={"otherDonate"} />

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
