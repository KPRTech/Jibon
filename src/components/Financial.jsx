import React from "react";

const Financial = () => {
  return (
    <div className="lg:px-40 my-20">
      <div>
        <div className="lg:flex">
          {/* one  */}
          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img
              src="/assets/images/Finalcials/img1.jpeg"
              className="mb-[0px]"
              alt=""
            />
            <a
              className="h-[22px] text-[#ff6400]  tracking-wide 
              hover:border-solid hover:border-b-2 hover:border-orange-600"
              href="/annualreports/Financial-Highlights-2021-Zindagi-Trust-Updated.pdf"
              target="_blank"
            >
              DOWNLOAD REPORT
            </a>
          </div>

          {/* two  */}

          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/mahnoor.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Mahnoor Mahboob
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Program Officer - Special Programs & Advocacy
            </p>
          </div>

          {/* three  */}
          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/ahsan.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Ahsan Abdul Razzak
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Marketing & Communication Officer
            </p>
          </div>

          {/* four  */}

          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/ahsan.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Ahsan Abdul Razzak
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Marketing & Communication Officer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
