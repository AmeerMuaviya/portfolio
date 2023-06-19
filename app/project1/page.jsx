import Image from "next/image";
import React from "react";
import {libre} from '@/components/Fonts'
import Link from "next/link";
import ArrowUp from "@/components/svg/arrow-up";
const page = () => {
  return <div className="min-h-screen">
    <h1 className={`text-[3rem] p-3 text-center ${libre}`}>
          Project No. 1
        </h1>
        <Link target="_blank" href='https://github.com/AmeerMuaviya/Online-Driving-School-System/' className="rounded-xl bg-black hover:bg-gradient-to-tr flex items-center w-52 mx-auto text-center hover:from-teal-400 hover:to-blue-500 px-5 py-2">View on GitHub <ArrowUp /></Link>
    <div className="flex flex-col justify-center items-center gap-8 mt-10">

        <Image src={'/images/sc2.png'} height={100} width={1000} alt="p1"/>
        <Image src={'/images/sc3.png'} height={100} width={1000} alt="p1"/>
        <Image className="mb-4" src={'/images/sc4.png'} height={100} width={1000} alt="p1"/>
    </div>
  </div>;
};

export default page;
