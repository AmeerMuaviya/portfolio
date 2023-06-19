"use client";
import Image from "next/image";
import React from "react";
import { fin_sans, zilla,fira } from "./Fonts";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="rounded-b-lg flex md:flex-nowrap flex-wrap-reverse h-full justify-around items-center md:p-5 p-1 px-2 md:h-[85.8vh]">
      <div className="md:w-[50%] w-[100%] md:mt-0 mt-5 text-center md:text-left">
        <h1 className={`md:text-[3rem] text-3xl text-center md:text-left ${fin_sans}`}>Welcome to my portfolio!</h1>

        <div> 
        <p className="inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <TypeAnimation
      className={`gradient-text ${zilla} md:text-3xl text-2xl`}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Web Developer.',
        100, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile App Developer',
        100,
        'Expret UI/UX designer.',
        100,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>

      </div>

      <div className="flex justify-center items-center flex-col">
      <Image
        src="/images/me.jpeg"
        width={300}
        height={300}
        alt="my-image"
        className="object-cover md:rounded-lg md:h-[340px] w-100 h-72 rounded-full w-fill"
        />
        <div className="mt-5 h-20 flex justify-center gap-5 items-end">
          <div>
       
            <Link
              href="https://wa.me/+923019071369"
              target="_blank"
              className="flex justify-center items-center flex-col"
            >
              <Image
                src="/whatsapp.svg"
                height={35}
                width={35}
                alt="Whatsapp icon"
              />
              <span className={fira}>Whatsapp</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.facebook.com/Rana.Muaviya128"
              target="_blank"
              className="flex justify-center items-center flex-col"
            >
              <Image
                src="/facebook.svg"
                height={35}
                width={35}
                alt="Facebook icon"
              />
              <span className={fira}>FaceBook</span>
            </Link>
          </div>
          <div>
            <Link
              href="https://twitter.com/EmirMuaviye"
              target="_blank"
              className="flex justify-center items-center flex-col"
            >
              <Image src="/twitter.svg" height={35} width={35} alt="Twitter icon" />
              <span className={fira}>Twitter</span>
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href="mailto:ranamuaviya127@gmail.com?subject = Feedback&body = Message"
              className="flex justify-center items-center flex-col"
            >
              <Image
                src="/gmail.svg"
                height={35}
                width={35}
                alt="Instagram icon"
              />
              <span className={fira}>Email</span>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Banner;
