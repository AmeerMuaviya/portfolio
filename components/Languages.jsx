'use client'
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Languages = () => {
  const percentage = 66;
  return (
    <div className="min-h-screen">
      <h1 className="text-blue-500 text-5xl font-extrabold text-center mb-4">Skills</h1>
      <div className="all-cards flex flex-wrap gap-10 justify-center items-center">

      <div className="card p-5">
        <h1 className="text-3xl text-center font-bold">HTML</h1>
      <div className="progress-bar max-w-xs" style={{ width: 170, height: 170 }}>
        <CircularProgressbar
          strokeWidth={3}
          value={95}
          className="font-extrabold"
          styles={buildStyles({pathColor:'#3b82f6',textColor:'#000000'})}
          text={`${95}%`}
          />
      </div>
          </div>
      <div className="card p-5">
        <h1 className="text-3xl text-center font-bold">CSS</h1>
      <div className="progress-bar max-w-xs" style={{ width: 170, height: 170 }}>
        <CircularProgressbar
          strokeWidth={3}
          value={80}
          className="font-extrabold"
          styles={buildStyles({pathColor:'#3b82f6',textColor:'#000000'})}
          text={`${80}%`}
          />
      </div>
          </div>
      <div className="card p-5">
        <h1 className="text-3xl text-center font-bold">JAVASCRIPT</h1>
      <div className="progress-bar max-w-xs" style={{ width: 170, height: 170 }}>
        <CircularProgressbar
          strokeWidth={3}
          className="font-extrabold"
          value={88}
          styles={buildStyles({pathColor:'#3b82f6',textColor:'#000000'})}
          text={`${88}%`}
          />
      </div>
          </div>
          </div>
    <div className="py-10">
        <div className="w-2/3 mx-auto flex flex-wrap items-center justify-around gap-5 py-10">
            <div className="actual-bar w-96">
                <div className="tags flex justify-between">
                    <span className="font-bold">React</span>
                    <span className="font-bold">90%</span>
                </div>
          <ProgressBar completed={90} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
            <div className="w-96">
            <div className="tags flex justify-between">
                    <span className="font-bold">NodeJs</span>
                    <span className="font-bold">88%</span>
                </div>
          <ProgressBar completed={88} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
            <div className="w-96">
            <div className="tags flex justify-between">
                    <span className="font-bold">TailwindCss</span>
                    <span className="font-bold">95%</span>
                </div>
          <ProgressBar completed={95} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
            <div className="w-96">
            <div className="tags flex justify-between">
                    <span className="font-bold">BootStrap</span>
                    <span className="font-bold">95%</span>
                </div>
          <ProgressBar completed={95} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
            <div className="w-96">
            <div className="tags flex justify-between">
                    <span className="font-bold">React Native</span>
                    <span className="font-bold">70%</span>
                </div>
          <ProgressBar completed={70} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
            <div className="w-96">
            <div className="tags flex justify-between">
                    <span className="font-bold">TypeScript</span>
                    <span className="font-bold">75%</span>
                </div>
          <ProgressBar completed={75} height="10px" isLabelVisible={false} bgColor="#3b82f6" />
            </div>
    </div>
    </div>
    </div>
  );
};

export default Languages;
