import React from 'react';
import AchievementHeader from './AchievementHeader';
import PrimaryButton from './PrimaryButton';

const OurWork = () => {
    return (
      <div>
        <AchievementHeader
          achiveHeader={"Our Work"}
          achiveDescription={
            "Our work involves pilot projects of school reform at government schools and advocacy based on our best practices to change education policy."
          }
        ></AchievementHeader>
        <section
          className="animate-[slideYTwo_1s_ease_1]"
          style={{
            background:
              'url("assets/images/orangebgnew.jpg")top center no-repeat',
          }}
        >
          <div className="px-4 lg:px-[45px] pt-[30px]">
            <div className="lg:flex justify-around items-center">
              <div>
                <p className="font-mont text-lg text-[#717171]">WHY</p>
                <h4 className="font-mont font-bold text-[#333333] text-[32px] mt-[5px] mb-[10px] uppercase">
                  School Reform
                </h4>
                <p className="font-play italic mb-[15px] text-[#717171]">
                  Reforming government schools is the solution to Pakistan's
                  education crisis
                </p>
                <div className="flex">
                  <img src="assets/images/ourWork-icons.jpg" alt="" />
                  <div className="p-1">
                    <div className="font-mont italic text-[#333333] text-[15px] pt-[15px]">
                      For Most Pakistani Children,
                    </div>
                    <div className="p-[5px] bg-[#FEC919] text-[#333333] font-bold text-[15px] font-mont">
                      a Government School is the only option
                    </div>
                    <br />
                    <div className="font-mont italic text-[#333333] text-[15px] pt-[10px]">
                      For Most Pakistani Children,
                    </div>
                    <div className="p-[5px] bg-[#FEC919] text-[#333333] font-bold text-[15px] font-mont">
                      a Government School is the only option
                    </div>
                    <br />
                    <div className="font-mont italic text-[#333333] text-[15px] pt-[10px]">
                      For Most Pakistani Children,
                    </div>
                    <div className="p-[5px] bg-[#FEC919] text-[#333333] font-bold text-[15px] font-mont">
                      a Government School is the only option
                    </div>
                    <br />
                    <br />
                    <div className="pt-[10px]">
                      <PrimaryButton className={`px-[25px] py-[10px]`} path="/our-work/school-reform">
                        Read More
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <img src="assets/images/ourWork.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default OurWork;