"use client";
import React from "react";
import Download from "./svg/Download";

const About = () => {
  return (
    <div className="mt-16 min-h-screen flex justify-center flex-wrap items-center gap-16">
      <div className="md:h-[35rem] bg-cover bg-me md:w-[25rem] md:rounded-lg rounded-full h-[15rem] w-[15rem] bg-center"></div>
      <div>
        <h1 className={`mb-20 text-6xl font-extrabold`}>About me</h1>
        <ul className="intro-list flex flex-col gap-6 px-3">
          <li>
            <span>Name</span>
            <span>Ameer Muaviya</span>
          </li>
          <li>
            <span>Date Of Birth</span>
            <span>December 8, 2005</span>
          </li>
          <li>
            <span>Address</span>
            <span>Harbance Pura Lahore</span>
          </li>
          <li>
            <span>Zip Code</span>
            <span>54850</span>
          </li>
          <li>
            <span>Email</span>
            <span>ranamuaviya127@gmail.com</span>
          </li>
          <li>
            <span>Phone</span>
            <span>03019071369</span>
          </li>
        </ul>
        <button className=" mt-5 bg-blue-500 flex text-white p-5 rounded-lg font-bold">
          Download Cv &nbsp; <Download />
        </button>
      </div>
    </div>
  );
};

export default About;
