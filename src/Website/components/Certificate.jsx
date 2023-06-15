import React from "react";
import { certificateData } from "./ServiceData";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jump from "react-reveal/Jump";
import { MdEmail, MdPhone } from "react-icons/md";
// main function program
export const Certificate = ({ theme, headText, paragraph }) => {
  return (
    <div className="w-full flex px-2 gap-10 flex-col mt-[100px] ">
      {/* first row */}
      <div className="Row_one flex-col flex w-full md:flex-row gap-2">
        {/* left_section */}
        <Fade left>
          <div className="left__ w-fullflex flex-col gap-1 md:w-1/2 h-full mt-3">
            <h6 style={{ color: paragraph }}>{certificateData[0].subName}</h6>
            <h1
              style={{ color: headText }}
              className="text-xl md:text-6xl font-bold">
              {certificateData[0].name}
            </h1>
            <h3 style={{ color: paragraph }} className="md:text-2xl">
              {certificateData[0].preBegin}
            </h3>
            <div className="line bg-blue-800 w-1/4 h-1"></div>
            <p style={{ color: paragraph }} className="w-3/4 py-2 text-sm fon">
              {certificateData[0].description}
            </p>
            <h4 className="text-xl" style={{ color: paragraph }}>
              {certificateData[0].contact}
            </h4>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdPhone />
              090778969347
            </h6>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdEmail />
              university@gmail.com
            </h6>
          </div>
        </Fade>
        {/* right_section */}
        <Fade right>
          <div className="right__ md:w-1/2 h-[100%] md:h-full">
            <img
              src={certificateData[0].image}
              className="h-[500px] border-e-8 border-blue-900 rounded"
              alt=""
            />
          </div>
        </Fade>
      </div>
      {/* second row */}
      <div className="Row_one flex-col mt-10 flex w-full md:flex-row md:flex-row-reverse gap-2">
        {/* left_section */}
        <Fade right>
          <div className="left__ md:px-10 w-full flex flex-col gap-1 md:w-1/2 h-full mt-3">
            <h6 style={{ color: paragraph }}>{certificateData[1].subName}</h6>
            <h1
              style={{ color: headText }}
              className="text-xl md:text-6xl font-bold">
              {certificateData[1].name}
            </h1>
            <h3 style={{ color: paragraph }} className="md:text-2xl">
              {certificateData[1].preBegin}
            </h3>
            <div className="line bg-blue-800 w-1/4 h-1"></div>
            <p style={{ color: paragraph }} className="w-3/4 py-2 text-sm fon">
              {certificateData[1].description}
            </p>
            <h4 className="text-xl" style={{ color: paragraph }}>
              {certificateData[1].contact}
            </h4>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdPhone />
              090778969347
            </h6>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdEmail />
              university@gmail.com
            </h6>
          </div>
        </Fade>
        {/* right_section */}
        <Fade left>
          <div className="right__ md:w-1/2 h-[100%] md:h-full">
            <img
              src={certificateData[1].image}
              className="h-[500px] border-e-8 border-blue-900 rounded"
              alt=""
            />
          </div>
        </Fade>
      </div>
      {/* Third Row */}
      <div className="Row_one flex-col mt-10 flex w-full md:flex-row gap-2">
        {/* left_section */}
        <Fade left>
          <div className="left__ w-fullflex flex-col gap-1 md:w-1/2 h-full mt-3">
            <h6 style={{ color: paragraph }}>{certificateData[2].subName}</h6>
            <h1
              style={{ color: headText }}
              className="text-xl md:text-6xl font-bold">
              {certificateData[2].name}
            </h1>
            <h3 style={{ color: paragraph }} className="md:text-2xl">
              {certificateData[2].preBegin}
            </h3>
            <div className="line bg-blue-800 w-1/4 h-1"></div>
            <p style={{ color: paragraph }} className="w-3/4 py-2 text-sm fon">
              {certificateData[2].description}
            </p>
            <h4 className="text-xl" style={{ color: paragraph }}>
              {certificateData[2].contact}
            </h4>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdPhone />
              090778969347
            </h6>
            <h6
              style={{ color: paragraph }}
              className="flex gap-1 items-center">
              <MdEmail />
              university@gmail.com
            </h6>
          </div>
        </Fade>
        {/* right_section */}
        <Fade right>
          <div className="right__ md:w-1/2 h-[100%] md:h-full">
            <img
              src={certificateData[2].image}
              className="h-[500px] border-e-8 border-blue-900 rounded"
              alt=""
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
