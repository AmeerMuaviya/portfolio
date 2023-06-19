'use client'
import Link from "next/link"
import { sacramanto } from "./Fonts"
import Download from "./svg/Download"

export default function Navbar (){

    return <nav className="min-h-20 rounded-t-xl p-1 flex-wrap md:flex-nowrap flex justify-around items-center">
        <h1 className={`text-5xl ${sacramanto} text-center`}>Ameer Muaviya</h1>
        <div className="links w-[55%] h-full flex-wrap md:flex-nowrap flex items-center justify-evenly font-bold text-lg ">
            <a href='/#intro' className="rounded-xl hover:bg-gradient-to-tr hover:from-teal-400 hover:to-blue-500 px-5 py-2 animate">Introduction</a>
            <a href='/#projects' className="rounded-xl hover:bg-gradient-to-tr hover:from-teal-400 hover:to-blue-500 px-5 py-2">Projects</a>
            <a href='/CV.pdf' download={true} className="rounded-xl flex justify-center items-center hover:bg-gradient-to-tr hover:from-teal-400 hover:to-blue-500 md:px-5 py-2">Download CV &nbsp;<Download/></a>
        </div>
    </nav>
}