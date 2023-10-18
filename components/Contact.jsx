'use client'
import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const Contact = () => {
  return <div id="contact" className="mt-10">
    <h1 className="text-5xl mb-10 text-blue-500 text-center font-extrabold">Contact me</h1>
  <div className="flex flex-wrap justify-center items-center gap-10">
    <ServiceCard image='whatsapp.svg' heading='Whatsapp' text={<Link target="_blank" className="text-blue-800 underline" href={'https://wa.me/+923019071369'}>+92 3019071369</Link>} alt='whatsapp svg' />
    <ServiceCard image='facebook.svg' heading='Facebook' text={<Link target="_blank" className="text-blue-800 underline" href={'https://www.facebook.com/Rana.Muaviya128'}>facebook.com/Rana.Muaviya128</Link>} alt='facebook svg' />
    <ServiceCard image='instagram.svg' heading='Instagram' text={<Link target="_blank" className="text-blue-800 underline" href={'https://www.instagram.com/emirmuaviye/'}>instagram.com/emirmuaviye/</Link>} alt='instagram svg' />
    <ServiceCard image='gmail.svg' heading='Gmail' text={<Link target="_blank" className="text-blue-800 underline" href={'mailto:ranamuaviya127@gmail.com'}>ranamuaviya127@gmail.com</Link>} alt='mail svg' />
  </div>
  </div>
};

export default Contact;
