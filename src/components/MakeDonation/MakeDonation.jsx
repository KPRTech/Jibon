import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MakeDonation.css";

const MakeDonation = () => {
  const [hoverText, setHoverText] = useState(
    "Donate to transform lives by reforming government schools."
  );
  const [selected, setSelected] = useState();
  const [inputValue, setInputValue] = useState();

  return (
    <div className="hero min-h-screen w-[90%] banner mx-auto">
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
          {hoverText === ""
            ? "Donate to transform lives by reforming government schools."
            : hoverText}
        </p>

        <button
          className={
            selected === 1
              ? "bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white"
              : "border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out"
          }
          onMouseOver={() =>
            setHoverText(
              "$10 sponsors one month of classes for a student at our reformed government schools."
            )
          }
          onClick={() => {
            setSelected(1);
            setInputValue(10);
          }}
        >
          $10
        </button>

        <button
          className={
            selected === 2
              ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white ml-2`
              : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out ml-2`
          }
          onMouseOver={() =>
            setHoverText(
              "$50 funds one student's spot in our technology-enhanced math learning lab."
            )
          }
          onClick={() => {
            setSelected(2);
            setInputValue(50);
          }}
        >
          $50
        </button>

        <button
          className={
            selected === 3
              ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white ml-2`
              : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out ml-2`
          }
          onMouseOver={() =>
            setHoverText(
              "$100 powers 60 kindergarten students with a nutritious local breakfast for one month."
            )
          }
          onClick={() => {
            setSelected(3);
            setInputValue(100);
          }}
        >
          $100
        </button>

        <button
          className={
            selected === 4
              ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white ml-2`
              : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out ml-2`
          }
          onMouseOver={() =>
            setHoverText(
              "$500 funds one month of primary education for an entire school of 75 school girls."
            )
          }
          onClick={() => {
            setSelected(4);
            setInputValue(500);
          }}
        >
          $500
        </button>

        <button
          className={
            selected === 0
              ? `bg-white px-[25px] py-[8px] text-primary font-mont font-bold cursor-pointer border border-white ml-2`
              : `border border-white px-[25px] py-[8px] text-white font-mont font-bold cursor-pointer hover:text-primary hover:bg-white duration-500 transition-all ease-out ml-2`
          }
          onMouseOver={() =>
            setHoverText(
              "Donate to transform lives by reforming government schools."
            )
          }
          onClick={() => {
            setSelected(0);
            setInputValue(0);
          }}
        >
          Other
        </button>

        <div className="mt-2">
          <input
            type="number"
            placeholder="Amount($)"
            className="p-3 w-80 text-black"
            id="input"
            value={inputValue}
          />

          <span className="text-lg ml-3 mt-2"> USD</span>
          <Link to={"/donate"}>
            <button className="linear duration-300 text-white bg-orange-500 px-5 py-3 rounded text-sm ml-5 hover:bg-orange-700 mt-2">
              DONATE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MakeDonation;
