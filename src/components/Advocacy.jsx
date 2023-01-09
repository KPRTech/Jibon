import React from "react";

const Advocacy = () => {
  return (
    <div>
      <div className="mt-14 lg:flex justify-center">
        <div className="lg:py-10 lg:w-[60%]">
          <div className="lg:pt-8">
            <img
              src="/assets/images/ourstory2.png"
              className="w-[100%]"
              alt=""
            />
          </div>
        </div>

        <div className="lg:pt-10 lg:pb-14 lg:w-[30%]  p-4">
          <img src="/assets/images/advocacy_1.png" alt="" />

          <h1 className="text-4xl sm:text-3xl font-bold mt-5">ADVOCACY</h1>
          <p className="my-5 leading-loose">
            Based on lessons learned from our School Reform pilot projects, we
            advocate to policymakers, bureaucrats and key decision-makers in the
            government and the media for changes in provincial and national
            policy and legislation to improve the state of our schools. Through
            these efforts, we have made an impact on thousands of government
            schools through policy changes in school governance and child
            protection.
          </p>

          <button className="px-2 py-1 text-white text-[14px] bg-[#FF6400] rounded">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advocacy;
