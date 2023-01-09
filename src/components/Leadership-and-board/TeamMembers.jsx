import React from "react";

const TeamMembers = () => {
  return (
    <div>
      <div className="bg-gray-200 pt-16 lg:px-40">
        <hr
          className="border-t-1 pt-10 
          border-gray-400 w-[100%] mx-auto mt-4"
        />

        <div className="lg:flex lg:justify-around">
          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/farheen.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Farheen Haider
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              HR Manager
            </p>
          </div>
          {/* two  */}

          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/azam.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Azam Shamsi
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Assistant Manager Accounts
            </p>
          </div>
          {/* three  */}

          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/daina.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Daina Saimon
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Assistant Manager Accounts
            </p>
          </div>

          {/* four */}

          <div className="grid justify-items-center p-2 text-justify lg:mx-2">
            <img src="/assets/images/LeaderShip/sadiq.png" alt="" />
            <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
              Sadiq Bata
            </h2>
            <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
              Assistant Manager Resource Development
            </p>
          </div>
          {/* end  */}
        </div>

        <hr
          className="border-t-1 pt-10 
          border-gray-400 w-[100%] mx-auto mt-4"
        />

        <div>
          <div className="lg:flex">
            {/* one  */}
            <div className="grid justify-items-center p-2 text-justify lg:mx-2">
              <img src="/assets/images/LeaderShip/zain.png" alt="" />
              <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
                Zain Ul Abdeen
              </h2>
              <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
                Assistant Manager IT Development
              </p>
            </div>

            {/* two  */}

            <div className="grid justify-items-center p-2 text-justify lg:mx-2">
              <img src="/assets/images/LeaderShip/nisma.png" alt="" />
              <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
                Nisma Iqbal
              </h2>
              <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
                Assistant Manager Programs - Shangla
              </p>
            </div>
          </div>
        </div>

        <hr
          className="border-t-1 pt-10 
          border-gray-400 w-[100%] mx-auto mt-4"
        />

        <div>
          <div className="lg:flex">
            {/* one  */}
            <div className="grid justify-items-center p-2 text-justify lg:mx-2">
              <img src="/assets/images/LeaderShip/sharjeel.png" alt="" />
              <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
                Sharjeel Afridi
              </h2>
              <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
                IT & Support Officer
              </p>
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
          </div>
        </div>

        <hr
          className="border-t-1 pt-10 
          border-gray-400 w-[100%] mx-auto mt-4"
        />

        <div>
          <div className="lg:flex">
            {/* one  */}
            <div className="grid justify-items-center p-2 text-justify lg:mx-2">
              <img src="/assets/images/LeaderShip/idress.png" alt="" />
              <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
                Muhammad Idrees Rafique
              </h2>
              <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
                HR Assistant
              </p>
            </div>

            {/* two  */}

            <div className="grid justify-items-center p-2 text-justify lg:mx-2">
              <img src="/assets/images/LeaderShip/munazza.png" alt="" />
              <h2 className="text-[#333333] text-[17px]  py-[10px] font-bold">
                Munazza Khalid
              </h2>
              <p className="text-[#333333] text-[15px] leading-6 pb-[30px]">
                Program Officer-SGS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
