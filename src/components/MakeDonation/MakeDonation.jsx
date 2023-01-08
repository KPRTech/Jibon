import React from "react";
import PrimaryButton from "../PrimaryButton";
import "./MakeDonation.css";

const MakeDonation = () => {
  return (
    <div className="hero  min-h-screen banner">
      <div className="text-center text-white text-3xl font-bold  pt-16">
        MAKE A DONATION
      </div>
      <p className="text-white text-center mt-2 font-style">
        Reform the government school system, transform Pakistan's future
      </p>

      <div
        className="w-[1px] h-[35px] bg-[#dddddd] relative mx-auto mt-4 after:absolute after:block
      after:w-[11px] after:h-[11px] after:border-solid after:border-2 after:border-[#ff6400] after:rounded-full after:top-[100%] after:left-[-5px]"
      ></div>

      <div className="lg:ml-14 ml-2  text-white mt-14 lg:w-2/4 sm:w-full">
        <h1 className="font-bold lg:text-5xl text-3xl">
          Invest in Pakistan's children today
        </h1>
        <p className="mt-2 mb-6 text-lg">
          Donate to transform lives by reforming government schools.
        </p>

        <button className="linear duration-300 bg-none border-solid border-2 border-white px-8 py-2 hover:text-orange-500 hover:bg-white text-lg m-2">
          $10
        </button>

        <button className="linear duration-300 bg-none border-solid border-2 border-white px-8 py-2 hover:text-orange-500 hover:bg-white text-lg m-2">
          $50
        </button>

        <button className="linear duration-300 bg-none border-solid border-2 border-white px-8 py-2 hover:text-orange-500 hover:bg-white text-lg m-2">
          $100
        </button>

        <button className="linear duration-300 bg-none border-solid border-2 border-white px-8 py-2 hover:text-orange-500 hover:bg-white text-lg m-2">
          $500
        </button>

        <button className="linear duration-300 bg-none border-solid border-2 border-white px-8 py-2 hover:text-orange-500 hover:bg-white text-lg m-2">
          Other
        </button>

        <div className="m-2">
          <input
            type="number"
            placeholder="Amount($)"
            className="p-3 w-80 text-black"
            id="input"
          />

          <span className="text-lg ml-3 mt-2"> USD</span>
          <button className="linear duration-300 text-white bg-orange-500 px-5 py-3 rounded text-sm ml-5 hover:bg-orange-700 mt-2">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeDonation;
