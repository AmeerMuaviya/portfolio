"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { lilta } from "./Fonts";
const Banner = () => {
  return (
    <div className="rounded-b-lg flex md:flex-nowrap flex-wrap-reverse h-full justify-around items-center md:p-5 p-1 px-2 md:h-[85.8vh]">
      <div className="md:mt-0 mt-5 text-center md:text-left">
        <h1 className={`md:text-[2rem] text-3xl text-center`}>
          Hi <span className="text-blue-600">I&#39;m</span>
        </h1>
        <h1
          className={`md:text-[5rem] tracking-wider mt-5 text-3xl text-center ${lilta}`}
        >
          Ameer Muaviya
        </h1>
        <div>
          <div className=" flex justify-center items-center mt-4">
            <TypeAnimation
              className={`gradient-text ${lilta} md:text-3xl text-2xl`}
              sequence={[
                "Full Stack Web Developer.",
                100,
                "Expret UI/UX designer.",
                100,
                "React.js Developer.",
                100,
                "Node.js Developer.",
                100,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
