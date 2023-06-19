"use client";
import React from "react";
import { libre } from "./Fonts";

const Intro = () => {
  return (
    <div id="intro">
      <div className="h-fit">
        <h1 className={`md:text-[3rem] text-2xl p-3 text-center ${libre}`}>
          Introduction & Skills
        </h1>

        <div className="md:px-28 px-3">
          <ul className="list-none">
            <li
              className={`tracking-wide block text-xl mb-3 bg-frontEnd bg-cover bg-no-repeat bg-center md:h-[16rem] h-max`}
            >
              <div className="bg-accent/80 rounded-lg h-full p-3 text-center">
                <h1
                  className={`md:text-[2rem] text-3xl p-3 text-center ${libre}`}
                >
                  A brief overview of me
                </h1>
                <div className="h-4/5 flex justify-center items-center">
                <p className="">
                  Hi👋 My name is <span className="highlighter">Ameer Muaviya</span> , A Full Stack <span className="highlighter">web & mobile Application</span> Developer.
                  Welcome to my portfolio, where I&#39;ll provide you with an
                  overview of my skills, experiences, & accomplishments as a
                  developer specializing in <span className="highlighter"> React, Next.js, Node.js, MySQL, &
                  React Native.</span>
                </p>
                </div>
              </div>
            </li>
            <li
              className={`tracking-wide block text-xl mb-3 bg-react_gif bg-no-repeat bg-center md:h-[18rem] h-max`}
            >
              <div className="bg-accent/80 rounded-lg h-full p-3 text-center">
                <h1
                  className={`md:text-[2rem] text-3xl p-3 text-center ${libre}`}
                >
                  FrontEnd Skills
                </h1>
                <div className="h-4/5 flex justify-center items-center">

                <p>
                  I created a lot of creative UI designs. I have a strong
                  understanding of <span className="highlighter"> HTML, CSS, & JavaScript</span> which are the
                  building blocks of websites. I use popular frameworks like <span className="highlighter">React & Next.js</span> to build websites that look great & work
                  well on different devices. I have a solid understanding of <span className="highlighter">TypeScript,</span> allowing me to take advantage of its static typing & advanced features to write code that is clean, easy to maintain & free from errors. 
                </p>
              </div>
              </div>
            </li>
            <li
              className={`tracking-wide block text-xl bg-contain mb-3 bg-tailwind bg-no-repeat bg-center md:h-[16rem] h-max`}
            >
              <div className="bg-accent/80 rounded-lg h-full  p-3 text-center">
                <h1
                  className={`md:text-[2rem] text-3xl p-3 text-center ${libre}`}
                >
                  Advanced UI skills
                </h1>
                <div className="h-4/5 flex justify-center items-center">

                <p>
                  I believe in writing code that is easy to understand &
                  maintain. I am skilled in using tools like <span className="highlighter">tailwindcss &
                  bootstrap</span> to make styling websites easier. I also know how to
                  use modern & advanced techniques like Flexbox & Grid for
                  designing beautiful & modern website layout
                </p>
              </div>
              </div>
            </li>
            <li
              className={`tracking-wide bg-contain text-xl mb-3 bg-nodejs bg-no-repeat bg-center md:h-[16rem] h-max`}
            >
              <div className="bg-accent/80 rounded-lg h-full  p-3 text-center">
                <h1
                  className={`md:text-[2rem] text-3xl p-3 text-center ${libre}`}
                >
                  BackEnd Skills
                </h1>
                <div className="h-4/5 flex justify-center items-center">

                <p>
                  In addition to front-end development, I am familiar with
                  back-end technologies like <span className="highlighter">Node.js & Express.js</span>. This allows
                  me to create <span className="highlighter">powerful server-side applications</span> that work
                  together with the front-end to deliver complete solutions.
                </p>
              </div>
              </div>
            </li>
            <li
              className={`tracking-wide bg-contain text-xl mb-3 bg-mysql bg-no-repeat bg-center md:h-[16rem] h-max`}
            >
              <div className="bg-accent/80 rounded-lg h-full  p-3 text-center">
                <h1
                  className={`md:text-[2rem] text-3xl p-3 text-center ${libre}`}
                >
                  Database Managment Skills
                </h1>
                <div className="h-4/5 flex justify-center items-center">

                <p>
                Speaking of databases, I have considerable experience working with <span className="highlighter">MySQL,</span> designing & optimizing schemas, writing complex queries & ensuring data integrity. I possess a thorough understanding of relational database management systems & have successfully implemented scalable & secure data solutions.
                </p>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
