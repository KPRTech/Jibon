import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./asiapakistan.css";
const AisaPakistanPage = () => {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const handleSelect1 = () => {
    setSelected1(true);
    setSelected2(false);
    setSelected3(false);
  };
  const handleSelect2 = () => {
    setSelected1(false);
    setSelected2(true);
    setSelected3(false);
  };
  const handleSelect3 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(true);
  };
  const handleHover1 = () => {
    const text =
      "$10 holistic education, nutritious support and teacher training.";
    setHoverText(text);
  };
  const handleHover2 = () => {
    const text =
      "$50 holistic education, nutritious support and teacher training.";
    setHoverText(text);
  };
  const handleHover3 = () => {
    const text = "Donate to transform lives by reforming government schools.";
    setHoverText(text);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <div
        style={{
          background: "url('assets/images/asiapakistan/ap-bg-flag.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="donate">
          <div
            className="mt-20 lg:mt-0 lg:h-[600px] relative"
            style={{
              background: 'url("assets/images/asiapakistan/ap-bg.png") top',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="pb-20 lg:pb-0 lg:h-[600px]">
              <div className="relative z-20">
                <div className="text-center pt-[90px] lg:pt-[150px] pb-8">
                  <div className="text-2xl lg:text-[30px] text-[rgb(123,255,152)]/90 leading-7 font-mont font-medium">
                    <strong>#</strong>Aisa<strong>Pakistan</strong>
                  </div>
                  <p className="font-play italic text-white">
                    Maximise your contribution by donating this Holiday Season
                  </p>
                </div>
                <div className="w-3/4 mx-auto">
                  <div className="text-white font-mont">
                    <p className="flex items-center font-bold">
                      Invest in{" "}
                      <p className="mx-1 text-base lg:text-[20px] text-[rgb(123,255,152)]/90 leading-7 font-medium">
                        <strong>#</strong>Aisa<strong>Pakistan</strong>
                      </p>
                      <em>Jo ho</em>
                    </p>
                    <p className="font-bold -mt-2">
                      progressive, tolerant and prosperous
                    </p>
                    <p>
                      {hoverText === "" ? (
                        <p>
                          Donate to bring holistic education to our government
                          schools
                        </p>
                      ) : (
                        <p>{hoverText}</p>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[17px] mt-6">
                    <span
                      className={
                        selected1 === true
                          ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white`
                          : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out`
                      }
                      onMouseOver={handleHover1}
                      onClick={handleSelect1}
                    >
                      $10
                    </span>
                    <span
                      className={
                        selected2 === true
                          ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white`
                          : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out`
                      }
                      onMouseOver={handleHover2}
                      onClick={handleSelect2}
                    >
                      $50
                    </span>
                    <span
                      className={
                        selected3 === true
                          ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white`
                          : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out`
                      }
                      onMouseOver={handleHover3}
                      onClick={handleSelect3}
                    >
                      Other
                    </span>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Amount($)"
                      className="p-2 w-[275px] text-black font-mont mt-3 lg:mt-0"
                      id="input"
                    />
                    <span className="text-lg ml-3 mt-2 text-white font-mont">
                      {" "}
                      USD
                    </span>
                    <button className="linear duration-300 text-white bg-orange-500 px-5 py-2 rounded text-sm ml-5 hover:bg-orange-700 mt-2 font-mont">
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 font-mont">
          <h2 className="text-[25px] font-bold text-center">
            Mera Khwab, #<span className="font-normal">Aisa</span>Pakistan…
          </h2>
          <p className="font-rale text-center text-[#333]">
            A progressive, tolerant and prosperous Pakistan
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Carousel
            responsive={responsive}
            draggable={true}
            minimumTouchDrag={1}
            className="pointer"
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
          >
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider1.jpg"
                alt=""
              />
              <h1>Anam Palla</h1>
              <h1>Educationist & Change Catalyst</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider2.png"
                alt=""
              />
              <h1>Shehzad Roy</h1>
              <h1>Musician & Humanitarian</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider3.jpg"
                alt=""
              />
              <h1>Alizah Sethi</h1>
              <h1>Volunteer and Supporter</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider4.jpg"
                alt=""
              />
              <h1>Aisha Qazizada</h1>
              <h1>Micro-Blogger and Supporter</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider5.jpg"
                alt=""
              />
              <h1>Alizeh Hashmi</h1>
              <h1>Medical Student</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider6.jpg"
                alt=""
              />
              <h1>Ebba Qureshi</h1>
              <h1>Founder and CEO Femgames</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider7.jpg"
                alt=""
              />
              <h1>Faizan Lakhani</h1>
              <h1>Journalist and Sports Reporter</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider8.jpg"
                alt=""
              />
              <h1>Rihaab Atta</h1>
              <h1>Youngest News Anchor (Jinn TV)</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider9.jpg"
                alt=""
              />
              <h1>Sabir Shah</h1>
              <h1>Micro-blogger and supporter</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider10.jpg"
                alt=""
              />
              <h1>Salma Alam</h1>
              <h1>CEO Durbeen</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider11.jpg"
                alt=""
              />
              <h1>Shamila Rashid</h1>
              <h1>Micro-blogger and supporter</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider12.jpg"
                alt=""
              />
              <h1>Shireen Ikramullah</h1>
              <h1>Artist & Teacher</h1>
            </div>
            <div className="text-center text-[17px] font-rale text-[#333] mx-7">
              <img
                className="mb-5"
                src="assets/images/asiapakistan/apslider13.jpg"
                alt=""
              />
              <h1>Tooba Zafar</h1>
              <h1>Coordinator LSBE at Aahung</h1>
            </div>
            <div></div>
            <div></div>
          </Carousel>
          <div className="lg:w-[45%] mx-auto pb-10 mt-[20px]">
            <a
              href="#donate"
              className="no-underline text-[17px] font-rale text-white"
            >
              <p className="p-[10px] text-center leading-[2] bg-[#ff6400]">
                Donate $50 or Rs 5000 and share your selfie with your
                <br />
                vision for schools that will build #AisaPakistan
              </p>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url('assets/images/asiapakistan/ap-pr.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-4 md:mx-auto pt-[50px] pb-[100px]">
          <h1 className="font-bold font-mont text-[#333] text-left text-[20px]">
            How to participate: about the <br />#
            <span className="font-normal">Aisa</span>Pakistan campaign
          </h1>
          <br />
          <p className="font-rale text-[18px] text-[#333] leading-[2]">
            We believe that holistic education – through art, sports, chess,
            music and child abuse awareness – can lead to a Pakistan that is
            progressive, tolerant and prosperous. If you share our vision of{" "}
            <strong>#</strong>Aisa<strong>Pakistan</strong>, your support can
            help us bring holistic education to our government schools.
          </p>
          <br />
          <img src="assets/images/asiapakistan/ib.png" alt="" />
          <br />
          <p className="font-rale text-[18px] text-[#333] leading-[2]">
            Please join us for this global day of giving – you can help us in
            the following 3 ways:
          </p>
          <br />
          <ol className="font-rale text-[17px] text-[#333] list-[lower-roman] lg:pl-[20px] ">
            <li>
              Recruit a like-minded friend (or three) and together donate $50 or
              Rs 5000 through our Facebook Fundraiser, Website or
              <br /> GlobalGiving page
            </li>
            <li>
              Take a selfie with a handwritten note on what you think should be
              taught in Pakistan's schools to build #AisaPakistan – the
              tolerant, progressive and prosperous future of our dreams
            </li>
            <li>
              Share on your social media with our hashtag #AisaPakistan. (e.g.
              “I want urban gardening programs in school for a kinder, greener
              and smarter Pakistan. I am supporting @zindagitrust in their quest
              to build #AisaPakistan through holistic education at government
              schools this Holiday Season – join the movement!”)
            </li>
            <ol>
              <br />
              <p>We hope you will be a part of this giving journey with us!</p>
              <div className="my-[5px] py-[30px] grid md:grid-cols-2 gap-y-5">
                <div className="md:border-r-[1px] border-solid border-r-black px-[15px] relative">
                  <a href="#/" className="">
                    <img
                      className="inline-block align-middle"
                      src="assets/images/asiapakistan/dn-fb.png"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full hover:bg-black/50 ease-linear duration-500"></div>
                  </a>
                </div>
                <div className="px-[15px] relative">
                  <a href="#/" className="">
                    <img
                      className="inline-block align-middle"
                      src="assets/images/asiapakistan/dn-gg.png"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full hover:bg-black/50 ease-linear duration-500"></div>
                  </a>
                </div>
              </div>
            </ol>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AisaPakistanPage;
