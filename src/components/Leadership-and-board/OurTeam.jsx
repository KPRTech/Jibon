import React from "react";

const OurTeam = () => {
  return (
    <div className="lg:px-40 ">
      <h1 className="text-center text-[22px] font-bold text-[#FF6400] leading-7 pb-[5px]">
        Our Team
      </h1>

      <div className="lg:flex lg:px-30 lg:my-10 lg:justify-between ">
        <div>
          <div
            className="hover:bg-[#FF6400] bg-gray-200 lg:py-6 lg:px-7  rounded border-solid 
        border-2 border-gray-200 text-[#FF6400] w-40 mx-auto mt-5 flex justify-center 
        py-4 px-5"
          >
            <span>
              <img
                src="/assets/images/LeaderShip/team_over.png"
                className="text-red-500"
                alt=""
              />
            </span>
          </div>
          <h3 className="text-center mt-5  text-[18px] font-bold leading-7">
            Our Team
          </h3>
          <hr
            className="border-t-4 
          border-orange-600 w-10 mx-auto mt-4"
          />
        </div>

        <div>
          <div
            className="bg-[#FF6400] hover:bg-gray-200 hover:text-orange-600 lg:py-6 
            lg:px-7  rounded border-solid border-2 border-gray-200 w-40 mx-auto mt-5 
            flex justify-center py-4 px-5"
          >
            <span>
              <img
                src="/assets/images/LeaderShip/boardturstee_hover.png"
                className="hover:text-red-600 text-center"
                alt=""
              />
            </span>
          </div>
          <h3 className="text-center mt-5  text-[18px] font-bold leading-7">
            Board of Trustees
          </h3>
          <hr
            className="border-t-4 
          border-orange-600 w-10 mx-auto mt-4"
          />
        </div>

        <div className="mb-5">
          <div
            className="hover:bg-[#FF6400] bg-gray-200 py-6 px-7 rounded border-solid 
        border-2 border-gray-200 text-[#FF6400] relative
        after:border-t-10 after:border-[#FF6400] block after:absolute after:top-[100%]
         after:left-[50%] after:ml[-15px] w-40 mx-auto mt-5 
         flex justify-center py-4 px-5 
        "
          >
            <span>
              <img
                src="/assets/images/LeaderShip/chapters.png"
                className="hover:text-gray-200"
                alt=""
              />
            </span>
          </div>
          <h3 className="text-center mt-5  text-[18px] font-bold leading-7">
            Our Chapters
          </h3>
          <hr
            className="border-t-4 
          border-orange-600 w-10 mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
