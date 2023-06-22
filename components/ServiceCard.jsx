'use client'
import Image from "next/image";
import React from "react";

const ServiceCard = (props) => {
  return <div className="service-card p-7 w-80 md:mx-0 mx-3 border flex flex-col items-center justify-between md:min-w-[400px] min-w-[90%]">
        <Image src={props.image} className="mx-auto" height={100} width={100} alt={props.alt} />
        <h1 className="heading text-center mt-5 mb-2">{props.heading}</h1>
        <p className="text-gray-500 text-center">{props.text}</p>
  </div>
};

export default ServiceCard;
