import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Banner from './banner/Banner';


const OurSchoolBanner = () => {
    const data = {
        navigation: true,
        pagination: false,
        autoplay: true,
        slidesPerView: 1
    }
    return (
        <div className='mt-20 lg:mt-0 pb-6'>
            <Banner data={data}>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner1.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner2.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner3.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner4.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner5.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-screen h-[85vh] lg:h-[85vh] relative"
                        style={{
                            background: "url('assets/images/khatoone pakistan/pbanner6.jpg')",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-full h-full bg-black/50">
                            <div className="py-[220px] lg:py-[220px] px-5 text-white font-bold text-center">
                                <h2 className="font-bold text-3xl text-center text-[#FF6400] mb-[10px]">
                                    KHATOON-E-PAKISTAN <br /> OVERNMENT GIRLS SCHOOL
                                </h2>
                                <h3 className="font-play italic font-normal text-lg md:text-xl lg:text-[22px] w-3/4 md:w-2/3 lg:w-[38%] mx-auto">
                                    T(Adopted In 2015)
                                </h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Banner>
        </div>
    );
};

export default OurSchoolBanner;