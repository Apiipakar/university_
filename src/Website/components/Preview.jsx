import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { prevData } from "./PrevData";
import { brandColor } from "./Colors";
import Fade from "react-reveal/Fade";
// main program function
export const Preview = () => {
  // states and variables
  const [cur, setCurrent] = useState(0);
  //  functions
  setTimeout(() => {
    setCurrent(Math.floor(Math.random() * prevData.length));
  }, 3000);

  return (
    <section
      className="preview__ w-full h-[550px] md:h-screen overflow-hidden bg-red-500  flex items-center   justify-center
      "
      style={{
        backgroundImage: `linear-gradient(to left,rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(${prevData[cur].image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {/* slides */}
      <div className="content__ w-full p-2 md:p-0 md:w-11/12 md:m-auto h-full flex flex-col justify-center text-white">
        <Fade top>
          <div className="welcome flex flex-row items-center gap-2">
            <span className="line w-32 h-1 bg-sky-900"></span>
            <h5 className="text-xl">{prevData[cur].first}</h5>
            <span className="line w-32 h-1 bg-sky-900"></span>
          </div>

          <h1 className=" mt-2 md:mt-0 uppercase text-6xl md:text-9xl font-bold w-full">
            {prevData[cur].second}
          </h1>
          <h3 className="mt-2 md:mt-0 text-2xl md:text-3xl capitalize">
            {prevData[cur].third}
          </h3>
          <h4 className="text-sm mt-2 md:mt-0">{prevData[cur].fourth}</h4>
          <button
            className="text-xl w-max capitalize px-3 py-1 mt-1"
            style={{ background: brandColor }}>
            {prevData[cur].btn}
          </button>
        </Fade>
      </div>
      {/* slide buttons */}
      <div className="slideBtns w-full flex justify-between items-center absolute z-0">
        <MdChevronLeft
          className="text-white bg-opacity-25 bg-black hover:bg-opacity-100 cursor-pointer rounded-full w-10 h-10 m-1"
          onClick={() => {
            if (cur > 0) {
              setCurrent(cur - 1);
            }
          }}
        />
        <MdChevronRight
          className="text-white bg-opacity-25 bg-black hover:bg-opacity-100 cursor-pointer rounded-full w-10 h-10 m-1"
          onClick={() => {
            cur < prevData.length - 1 && setCurrent(cur + 1);
          }}
        />
      </div>
    </section>
  );
};
