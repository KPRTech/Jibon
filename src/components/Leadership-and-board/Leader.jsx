import React from "react";

const Leader = () => {
  return (
    <div className="lg:px-40 my-16 lg:flex">
      <div className="lg:w-[48%] lg:pr-2">
        <h1 className="text-[22px] font-bold lg:pl-10 pl-2 text-[#3B3B3B]">
          Message from our Founder and President
        </h1>
        <div className="block rounded-lg shadow-lg bg-white  p-5">
          <div class="w-full mt-5">
            <div className="">
              <span>
                <img
                  src="/assets/images/LeaderShip/chairmannew.jpg"
                  className="inline-block mb-3"
                  alt=""
                />
              </span>
              <font className="text-[16px] m-3 leading-7 text-[#666666] text-justify">
                When I started Zindagi Trust I had a vision to improve the lives
                of children across Pakistan. We have evolved as an organisation
                over the years, starting from educating working children to
                turning around government schools to now focusing on reforming
                the education system. I am proud of the change we have been able
                to bring about, both in creating models that give a reason to
                believe and in achieving gains in school governance or child
                protection through our advocacy. I hope and pray and work every
                day to make sure we continue to adapt to best serve our
                children.
              </font>
            </div>
          </div>
        </div>

        <em>
          <p className="text-right text-[18px] leading-8 mt-5 pr-2 text-[#3B3B3B]">
            Shehzad Roy
          </p>
        </em>
      </div>

      <div className="lg:w-[48%] lg:pl-2">
        <h1 className="text-[22px] font-bold lg:pl-10 pl-2 text-[#3B3B3B]">
          Message from our Chief Academic Officer
        </h1>
        <div className="block rounded-lg shadow-lg bg-white  p-5">
          <div class="w-full mt-5">
            <div className="">
              <span>
                <img
                  src="/assets/images/LeaderShip/aamnapasha.png"
                  className="inline-block mb-3"
                  alt=""
                />
              </span>
              <font className="text-[16px] m-3 leading-7 text-[#666666] text-justify">
                Without doubt, with our children lies the future of our society.
                I firmly believe in the role education plays in social justice.
                To this end, it is crucial for us to make 'quality' education
                accessible and to adopt a more holistic approach to teaching and
                learning. We need to support our childrens wellbeing, encourage
                socio-emotional learning, develop key competencies and values
                alongside strong academic foundations that will allow them to be
                champions of change. I am honored to be part of zindagi trust
                where I can continue to advocate for educational reform.
              </font>
            </div>
          </div>
        </div>

        <em>
          <p className="text-right text-[18px] leading-8 mt-5 pr-2 text-[#3B3B3B]">
            Aamna Pasha
          </p>
        </em>
      </div>
    </div>
  );
};

export default Leader;
