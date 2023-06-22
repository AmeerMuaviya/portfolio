'use client'
import React from "react";
import {lilta } from "./Fonts";
import Image from "next/image";

const Education = () => {
  return (
    <div className="min-h-screen md:w-3/4 w-full px-2 flex flex-col flex-wrap gap-10 md:px-0 mx-auto my-10">
        <h1 className="text-blue-500 font-extrabold text-3xl mb-5 md:text-left text-center">Education</h1>
    <div className="card flex py-5 px-3 md:justify-start justify-center flex-col md:flex-row items-center flex-wrap">
        <div className="first-section w-1/8 block min-h-full">
            <div className="bg-blue-500 flex rounded-full w-16 h-16 items-center justify-center">
            <Image src={'/degree.svg'} height={100} className="h-12 w-12 mx-auto" width={100} alt="degree svg"/>
            </div>
        </div>
        <div className="second-section w-fit px-2">
            <span className="time text-blue-500 font-extrabold block text-center md:text-left">2021-2022</span>
            <span className={`md:text-4xl block ${lilta} tracking-wider md:text-left text-center text-2xl`}>Matric in Computer Science</span>
            <span className={`text-2xl font-semibold md:mt-0 mt-4 md:text-left text-center block`}>Govt School Harbance Pura Lahore</span>
            <p className="text-gray-500 md:text-left text-center ">I completed my matric from CDG boys high school Harbance Pura Lahore with good result.</p>
        </div>
    </div>
    <div className="card flex py-5 md:justify-start p-3 justify-center items-center flex-wrap">
        <div className="first-section w-1/8 flex justify-end">
            <div className="bg-blue-500 flex rounded-full w-16 h-16 items-center justify-center">
            <Image src={'/degree.svg'} height={100} className="h-12 w-12 mx-auto" width={100} alt="degree svg"/>
            </div>
        </div>
        <div className="second-section w-fit p-2">
            <span className="time md:text-left text-blue-500 font-extrabold block text-center">2022-2023</span>
            <span className={`md:text-4xl block ${lilta} tracking-wider md:text-left text-center text-2xl`}>Intermediate in Computer Science</span>
            <span className={`text-2xl font-semibold mt-4 md:mt-0 md:text-left text-center block`}>Govt Shalimar College Lahore</span>
            <p className="text-gray-500 md:text-left text-center">I completed first year at Shalimar College & I&#39;m curruntly studying here</p>
        </div>
    </div>
    </div>
  );
};

export default Education;
