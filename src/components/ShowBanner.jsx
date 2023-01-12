import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Banner from "./banner/Banner";
import PrimaryButton from "./PrimaryButton";

const ShowBanner = () => {
  const data = {
    navigation: true,
    pagination: false,
    autoplay: true,
    slidesPerView: 1,
  };
  return (
    <div className="mt-20 lg:mt-0">
      <Banner data={data}>
        <SwiperSlide>
          <div
            className="w-screen h-[40vh] lg:h-[105vh] relative"
            style={{
              background: "url('assets/images/banner1.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="py-20 lg:py-[300px] px-5 text-white font-bold text-center">
                <h1 className="font-bold font-mont text-xl md:text-4xl lg:text-[44px] mb-[10px]">
                  REFORMING THE EDUCATION SYSTEM
                </h1>
                <p className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                  Through Pilot Projects and Advocacy
                </p>
                <div className="w-20 mx-auto my-5">
                  <PrimaryButton>
                    <Link to={"/donate"}>Donate</Link>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen h-[40vh] lg:h-[105vh] relative"
            style={{
              background: "url('assets/images/banner2.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="lg:absolute py-20 lg:py-[300px] lg:px-40 text-white font-bold text-center lg:text-left">
                <h1 className="font-bold font-mont text-xl md:text-4xl lg:text-[44px] mb-[10px]">
                  A YEAR IN REVIEW
                </h1>
                <p className="font-play italic font-normal text-lg md:text-xl lg:text-[22px]">
                  Enjoy a snapshot of our activities and achievements at our
                  schools
                </p>
                <div className="my-5 w-24 mx-auto lg:w-auto lg:mx-0">
                  <PrimaryButton>View now</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen h-[40vh] lg:h-[105vh] relative"
            style={{
              background: "url('assets/images/banner3.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/50">
              <div className="absolute top-1/3 lg:top-0 lg:py-[300px] lg:px-40 text-white font-bold text-center lg:text-left">
                <h1 className="font-bold font-mont text-lg md:text-4xl lg:text-[44px] mb-[10px] lg:w-11/12">
                  TRANSFORMING STUDENT LIVES
                </h1>
                <p className="font-play italic font-normal text-md md:text-xl lg:text-[22px] w-2/3 mx-auto lg:w-full">
                  by delivering Holistic Education at Government Schools
                </p>
                <div className="my-5 w-24 mx-auto lg:w-auto lg:mx-0">
                  <PrimaryButton>View now</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Banner>
    </div>
  );
};

export default ShowBanner;
