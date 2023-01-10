import React from "react";
import PrimaryButton from "./PrimaryButton";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaHospitalAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1A1A1A]">
        <div className="lg:container mx-auto lg:py-8 lg:px-24 py-4 gap-4 px-5 grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div>
            <h1 className="text-base font-bold text-neutral-400">
              STAY CONNECTED
            </h1>
            <div className="border-t-4 border-[#FF6400] w-8 my-4"></div>
            <h2 className="text-neutral-400 text-sm pb-1">
              Subscribe to our newsletter
            </h2>
            <div className="flex">
              <input
                className="text-sm border-none outline-none py-2 px-3 mr-1"
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address...."
              />
              <PrimaryButton>Join</PrimaryButton>
            </div>
            <div className="text-neutral-400 mt-4 flex">
              <a
                className="rounded-full hover:text-white border-2 p-4 mr-3 duration-500 hover:border-[#FF6400] hover:bg-[#FF6400]"
                href="https://www.facebook.com/zindagitrust?_rdc=1&_rdr"
              >
                <FaFacebookF />
              </a>
              <a
                className="rounded-full hover:text-white border-2 p-4 mr-3 duration-500 hover:border-[#FF6400] hover:bg-[#FF6400]"
                href="https://www.instagram.com/zindagitrust/"
              >
                <FaInstagramSquare />
              </a>
              <a
                className="rounded-full hover:text-white border-2 p-4 mr-3 duration-500 hover:border-[#FF6400] hover:bg-[#FF6400]"
                href="https://twitter.com/ZindagiTrust"
              >
                <FaTwitter />
              </a>
              <a
                className="rounded-full hover:text-white border-2 p-4 mr-3 duration-500 hover:border-[#FF6400] hover:bg-[#FF6400]"
                href="https://www.youtube.com/channel/UCnvsdmmh9H-66ki_Pp5KWfw"
              >
                <FaHospitalAlt />
              </a>
            </div>
          </div>

          <div>
            <h1 className="text-base font-bold text-neutral-400">NAVIGATE</h1>
            <div className="border-t-4 border-[#FF6400] w-8 my-4"></div>
            <div className="grid grid-cols-2">
              <div>
                <a href="https://www.zindagitrust.org/about-us/ourstory">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    About Us
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/our-work/school-reform">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Our Work
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/volunteer-program">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Get Involved
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/contact">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Contact us
                  </h2>
                </a>
              </div>
              <div>
                <a href="https://www.zindagitrust.org/donate.php">
                  {" "}
                  <h2 className="text-gray-400 text-sm leading-7 text-gray-400 text-sm hover:text-[#FF6400]">
                    Donate
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/careers">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Careers
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/news-events">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Events
                  </h2>
                </a>
                <a href="https://www.zindagitrust.org/Privacy-policy.php">
                  {" "}
                  <h2 className="leading-7 text-neutral-400 text-sm hover:text-[#FF6400]">
                    Policy
                  </h2>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-base font-bold text-neutral-400">
              CONTACT INFO
            </h1>
            <div className="border-t-4 border-[#FF6400] w-8 my-4"></div>
            <p className="text-neutral-400 text-sm leading-7">
              House 8/A, Block 7/8, Bahadur Yar Jang Cooperative Housing
              Society, Karachi
            </p>
            <h2 className="text-neutral-400 text-sm leading-7">
              <span className="text-white">Phone:</span> 92-21- 34305614 - 6 /
              111-111-439
            </h2>
            <h2 className="text-neutral-400 text-sm leading-7">
              <span className="text-white">Email:</span> info@zindagitrust.org
            </h2>
          </div>
          <div>
            <h1 className="text-base font-bold text-neutral-400">
              CERTIFIED BY
            </h1>
            <div className="border-t-4 border-[#FF6400] w-8 my-4 mb-6"></div>
            <div className="flex gap-x-7 lg:justify-between">
              <img
                className="w-24"
                src="/assets/images/impact/footer-img1.png"
                alt="footer-img1"
              />
              <img
                className="w-24"
                src="/assets/images/impact/footer-img2.png"
                alt="footer-img2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* footer copy right */}
      <div className="bg-[#000000]">
        <p className="text-gray-400 text-sm text-center py-4">
          © Zindagi Trust | Non-Profit Organisation | All Rights Reserved 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
