import React from "react";
import HeroBanner from "../../components/HeroBanner";
import UpperFooter from "../../components/UpperFooter";
import SecondarySlider from "../../components/secondarySlider/SecondarySlider";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../components/secondarySlider/SecondarySlider.css";

const ACRToPERPage = () => {
  const settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const confidentialReports = [
    {
      id: 1,
      title: "Previously used Annual Confidential Report (ACR)",
      image: [
        "assets/images/acrToPerPage/confideantial-report1.jpg",
        "assets/images/acrToPerPage/confideantial-report2.jpg",
        "assets/images/acrToPerPage/confideantial-report3.jpg",
        "assets/images/acrToPerPage/confideantial-report4.jpg",
      ],
    },
    {
      id: 2,
      title: "New Performance Evaluation Report (PER):",
      image: [
        "assets/images/acrToPerPage/confideantial-report5.jpg",
        "assets/images/acrToPerPage/confideantial-report6.jpg",
        "assets/images/acrToPerPage/confideantial-report7.jpg",
      ],
    },
  ];

  const teachersImage = [
    "assets/images/acrToPerPage/teacher6.jpg",
    "assets/images/acrToPerPage/teacher1.jpg",
    "assets/images/acrToPerPage/teacher2.jpg",
    "assets/images/acrToPerPage/teacher4.jpg",
    "assets/images/acrToPerPage/teacher3.jpg",
    "assets/images/acrToPerPage/teacher5.jpg",
  ];
  return (
    <div>
      <HeroBanner
        title="Revision of Annual Confidential Report to
        Performance Evaluation Report"
        heroTextOne="Sindh Government Moves to Modernise Teacher Evaluation"
        heroTextTwo=""
      />
      <div className="mt-10 mb-10 w-[75%] mx-auto">
        <div className="flex flex-row gap-16 xs:max-2xl:justify-center">
          <div className="w-[558px] h-[290px] border relative">
            <img
              className="w-[545px] h-[277px] absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto object-cover"
              src="/assets/images/acrToPerPage/acr-meeting.png"
              alt=""
            />
          </div>
          <p className="w-[50%] font-rale text-[16px] leading-loose text-[#333] xs:max-2xl:w-full">
            On 2nd June 2022, the Sindh Government approved a new teacher
            performance evaluation format for government teachers across the
            province. Teachers are now to be judged on factors related to the
            teaching profession, like student-centered teaching and active
            classroom management instead of the generic metrics of the Annual
            Confidential Report (ACR) applicable to all civil servants of a
            certain grade.
          </p>
        </div>
        <div className="mt-10 flex flex-col flex-wrap items-center">
          <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
            Why was there a need to change the Annual Confidential Report (ACR)?
          </h2>
          <p className="font-rale text-slate-700 text-base leading-loose mt-2">
            Every government official from Grade 9-16 is evaluated for their
            performance and given a promotion based on their Annual Confidential
            Report (ACR), But the problem was that the ACRs of police, teachers,
            doctors and other government employees are similar. This means that
            a policeman and a teacher were evaluated under the same generic
            criteria, notwithstanding the altogether different nature of their
            work. Teachers were supposedly judged on metrics such as typing
            speed, financial integrity and observance of security measures,
            which have little to no connection to a teacher’s role or scope.
            This meant that teachers were not assessed on their pedagogical
            skills and classroom interaction, leaving no incentive for them to
            improve in those areas. Not only did this performance evaluation
            system suffer from a lack of accountability for under-performing
            teachers, it also fell short on appreciation of exceptional
            teachers.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-20 mt-10 mb-16 xs:max-xl:justify-center">
          {confidentialReports.map((reportInfo) => {
            return (
              <div className="w-[45%]">
                <h2 className="font-rale text-[#FF6400] text-2xl font-bold text-center">
                  {reportInfo.title}
                </h2>
                <div className="mt-2 mb-2">
                  <hr />
                </div>
                <div className="mt-5">
                  <SecondarySlider children={reportInfo} slideNo={1} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col flex-wrap items-center">
          <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
            A Long Struggle:
          </h2>
          <p className="font-rale text-slate-700 text-base leading-loose mt-2">
            The journey to introduce the Performance Evaluation Report (PER) had
            formally started back in 2017. Shehzad Roy, President Zindagi Trust
            pointed out that, “Several education ministers and secretaries have
            changed between then and now, and with each new minister or
            secretary, they had to start from scratch, “but we persevered”. As
            many as three education ministers and seven education secretaries
            had changed since they started working on introducing the PER to
            replace the ACR.
          </p>
        </div>
        <div className="mt-10 flex flex-col flex-wrap items-center">
          <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
            Revision of Annual Confidential Report (ACR) to Performance
            Evaluation Report (PER):
          </h2>
          <p className="font-rale text-slate-700 text-base leading-loose mt-2">
            Stakeholders from the Sindh Education and Literacy Department
            (SELD), Zindagi Trust officials and government representatives held
            several consultations over the years to develop a Performance
            Evaluation Report (PER) form customized to the teaching profession
            was developed. The new evaluation form has sections on Classroom
            Management, Planning and Instruction and Classroom Assessments,
            allowing for teachers to be assessed on their lesson plans, on using
            student-centered activities, maintaining regular feedback through
            assessments, and on encouraging a positive classroom environment,
            healthy interaction with parents, regular and accurate checking of
            students’ work, to name a few categories.
          </p>
        </div>
        <div className="mt-10 flex flex-col flex-wrap items-center">
          <h2 className="font-mont text-[#FF6400] text-2xl font-bold">
            Moving Forward:
          </h2>
          <p className="font-rale text-slate-700 text-base leading-loose mt-2">
            Zindagi Trust will be initiating the implementation and training of
            Government Teachers across Sindh for the new Performance Evaluation
            Report (PER) and our vision is to pilot this process in other
            provinces of Pakistan as well.
            <br /> Read what the experts have to say about the improvement in
            teacher evaluation form.
          </p>
        </div>

        <div className="p-5 mt-20 container m-auto relative">
          <Slider {...settings}>
            {teachersImage.map((img, key) => {
              return (
                <div className="">
                  <img className="w-[90%]" src={img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="mt-10">
          <h3 className="font-mont font-bold">PRESS COVERAGE:</h3>
          <div>
            <a className="font-mont text-[#FF6400] hover:underline" href="https://www.thenews.com.pk/print/845568-new-evaluation-criteria-for-teachers-to-improve-quality-of-education" target="blank">New evaluation criteria for teachers to improve quality of education | The News</a>
          </div>
        </div>
      </div>

      <UpperFooter
        upperTitle="SCHEDULE A VISIT TO OUR MODEL SCHOOLS"
        upperText="Book a visit to our school to meet the students whose lives have been transformed."
        upperBtn="Schedule now "
      />
    </div>
  );
};

export default ACRToPERPage;
