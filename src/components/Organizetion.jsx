import React from "react";
import Slider from "react-slick";

const Organizetion = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="lg:my-10">
      <h1 className="text-2xl font-bold text-center mt-12 text-[#FF6400]">
        ORGANIZATION TIMELINE
      </h1>

      <div
        className="w-[1px] h-[35px] bg-[#dddddd] relative mx-auto mt-4 after:absolute after:block
      after:w-[11px] after:h-[11px] after:border-solid after:border-2 after:border-[#ff6400] after:rounded-full after:top-[100%] after:left-[-5px]"
      ></div>

      <div className="lg:mx-auto mt-2 ">
        <div className="">
          <img
            src="/assets/images/orgtimeline.jpg"
            className="lg:mx-auto w-[86%] overflow-hidden"
            alt=""
          />

          <div className="mt-3 mb-14 mx-auto lg:px-34">
            <Slider {...settings}>
              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2003</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Founded by Shehzad Roy
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold ">2004</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Paid to Learn program launched, giving a daily stipend to
                  working children
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2007</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  School Reform program launched with adoption of SMB Fatima
                  Jinnah Government School
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2008</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  School Consolidation introduced to Sindh Government
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2009</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Student Achievements begin to roll in with Muqaddas Butool's
                  gold in art at the International Schools Educational Olympiad
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2011</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Evolution of School Reform program to allow more government
                  teacher ownership. LSBE, Chess and Football introduced
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2012</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Paid to Learn Secondary Sponsorship launched to support
                  continuing education of alumni
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2012</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Volunteer run Summer Camp launched at SMB Fatima Jinnah
                  Government School
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2015</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  School Reform program expanded with adoption of
                  Khatoon-e-Pakistan Government School
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2016</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Teacher Professional Development introduced under the School
                  Reform program
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2018</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Advocacy for Life Skills Based Education program leads to
                  adoption in Sindh and Balochistan curriculum
                </p>
              </div>

              <div className="text-center w-4/5">
                <h1 className="text-[22px] text-[#FF6400] font-bold">2020</h1>
                <p className="lg:w-4/5 lg:mx-10 text-[15px] text-[#333333] font-bold mb-[15px] ">
                  Judicial petition leads to ban against Corporal Punishment
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizetion;
