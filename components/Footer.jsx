import React from "react";
import { cantora } from "./Fonts";
const Footer = () => {
  return <div id="footer" className="bg-accent/80 rounded-t-xl">
        <p className={`md:px-10 px-3 mb-0  mt-28 text-2xl ${cantora} leading-7 tracking-wider text-ceter`}>Thank you for visiting my portfolio website. I invite you to explore my projects, learn more about my skills, and see how I can contribute to your next project. If you have any questions or would like to collaborate, please feel free to reach out. I look forward to connecting with you!</p>
  </div>;
};

export default Footer;
