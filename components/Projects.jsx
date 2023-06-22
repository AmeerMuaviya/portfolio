"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowUp from "./svg/arrow-up";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className={`text-[3rem] p-3 text-center `}>Projects</h1>
      <p className="text-center md:text-2xl text-xl">
        Throughout my career, I have successfully delivered projects for a range
        of clients, showcasing my ability to adapt to different industries and
        project requirements. My portfolio reflects a unique collection of work,
        highlighting my creativity and skills to detail.
      </p>
      <ul className="md:px-28 pl-6 mt-10">
        <li className="list-decimal md:text-2xl text-xl">
          <h1 className={`mb-4`}>
            <span className="highlighter p-2">
              A very beautiful and Functional Website for &quot;Shoaib
              Academy&quot;:
            </span>
          </h1>
          <Image
            src={"/images/sc2.png"}
            className="mx-0"
            width={1000}
            height={100}
            alt="academy"
          />
          <Link
            href="/project1"
            className="rounded-xl bg-black text-white hover:bg-gradient-to-tr flex items-center hover:bg-blue-500 px-5 py-2 mb-10 mt-4 w-max mx-auto"
          >
            Detailed view <ArrowUp />
          </Link>
        </li>

        <li className="mt-4 list-decimal md:text-2xl text-xl">
          <h1 className={`mb-4`}>
            <span className="highlighter p-2">
              A driving school managment website as a university project:
            </span>
          </h1>
          <Image
            src={"/images/sc9.png"}
            className="mx-0"
            width={1000}
            height={100}
            alt="university project"
          />
          <Link
            href="/project2"
            className="rounded-xl bg-black text-white hover:bg-gradient-to-tr flex items-center hover:bg-blue-500 px-5 py-2 mb-10 mt-5 w-max mx-auto"
          >
            Detailed view <ArrowUp />
          </Link>
        </li>
        <li className="mt-4 list-decimal md:text-2xl text-xl">
          <h1 className={`mb-4`}>
            <span className="highlighter p-2">
              Mobile Application For &quot;Shoaib Academy (Under
              Development)&quot;:
            </span>
          </h1>
          <div className="flex justify-center flex-wrap items-center gap-5">
            <Image
              src={"/images/sc10.jpeg"}
              height="0"
              sizes="100vw"
              width='0'
              alt="pictuer"
            />
            <Image
              src={"/images/sc11.jpeg"}
              width='0'
              height="0"
              sizes="100vw"
              alt="pictuer"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
