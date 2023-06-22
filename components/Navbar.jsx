"use client";
import { sacramanto } from "./Fonts";
import Download from "./svg/Download";
import Script from "next/script";

export default function Navbar() {
  return (
    <nav className="min-h-20 sticky top-0 bg-white py-4 rounded-t-xl p-1 flex-wrap md:flex-nowrap flex justify-around items-center">
      <h1 className={`text-5xl ${sacramanto} text-center`}>Ameer Muaviya</h1>
      <div className="links w-[55%] h-full flex-wrap md:flex-nowrap flex items-center justify-evenly font-bold text-lg ">
        <a href="/#intro" className={`underline-on-hover`}>
          Introduction
        </a>
        <a href="/#skills" className={`underline-on-hover`}>
          Skills
        </a>
        <a href="/#contact" className={`underline-on-hover`}>
          Contact
        </a>
        <a href="/#projects" className={`underline-on-hover`}>
          Projects
        </a>
        <a
          href="/CV.pdf"
          download={true}
          className="bg-blue-500 flex text-white p-2 rounded-lg font-bold"
        >
          Download CV &nbsp;
          <Download />
        </a>
      </div>
      <Script src="/Script.js" strategy="afterInteractive" />
    </nav>
  );
}
