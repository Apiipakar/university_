import React from "react";
import CountApp from "react-countup";
import Zoom from "react-reveal/Zoom";
import theater from "../../images/theater.jpg";
export const Counter = () => {
  return (
    <section
      className="sectionCount w-full flex items-center mt-[50px] h-[200px] md:h-[400px]"
      style={{
        background: `linear-gradient(to top, rgba(0,0,99,0.4),rgba(0,0,99,0.8)),url(${theater})`,
        backgroundAttachment: "fixed",
      }}>
      <div className="w-full px-2 md:px-0 md:w-11/12 flex m-auto justify-around gap-10 text-white h-max">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-2xl md:text-6xl font-bold">
            <CountApp end={20} duration={10} delay={2} />+
          </h1>
          <h3 className="text-center text-sm md:text-2xl">Graduation</h3>
        </div>

        <div className="flex flex-col text-center md:text-start">
          <h1 className="md:text-6xl font-bold">
            <CountApp end={1000} delay={5} />+
          </h1>
          <h3 className="text-center text-sm md:text-2xl">Students Joined</h3>
        </div>

        <div className="flex flex-col text-center md:text-start">
          <h1 className="md:text-6xl font-bold">
            <CountApp end={100} delay={5} />%
          </h1>
          <h3 className="text-center text-sm md:text-2xl">
            Quality University
          </h3>
        </div>
      </div>
    </section>
  );
};
