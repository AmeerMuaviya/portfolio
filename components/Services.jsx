'use client'
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="my-6">
        <h1 className="text-5xl font-extrabold text-blue-500 text-center mb-4">Services</h1>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <ServiceCard image={"/tailwind.svg"} heading='Web Design' text='I am skilled in using tools like tailwindcss & bootstrap to make styling websites easier. I also know how to use modern & advanced techniques like Flexbox & Grid for designing beautiful & modern website layout' alt="react" />
      <ServiceCard image={"/React.svg"} alt="react" heading='Web Development' text="I use popular frameworks like React & Next.js to build websites that look great & work well on different devices. I have a solid understanding of TypeScript, allowing me to take advantage of its static typing & advanced features" />
      <ServiceCard image={"/React.svg"} heading='Full Stack Website' alt="tailwind" text="Trust me! Its will totally upto me. I'll be responsible for your website from scratch to hosting ready website. I'll be managing your website and ensure it's best perfomance & best user expereince" />
    </div>
    </div>
  );
};

export default Services;
