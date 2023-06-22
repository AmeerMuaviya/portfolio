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
      <ServiceCard image={"/react-native.svg"} heading='App Development' alt="tailwind" text='I have strong understanding of React-Native for building fully functional and useful application. I choosed React-Native because it allows me to develop application for android, mac and windows at the same time.' />
    </div>
    </div>
  );
};

export default Services;
