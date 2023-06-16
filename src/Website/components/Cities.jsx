import React from "react";
import { LocationData } from "./ServiceData";

// main function program
export const Cities = ({ paragraph, headText }) => {
  return (
    <>
      <h1
        className="text-center text-3xl font-bold mt-[50px]"
        style={{ color: headText }}>
        Where you can find us?
      </h1>

      <div className="mt-5 w-full flex flex-col gap-5 md:flex-row ">
        {LocationData.map((l) => {
          return (
            <div className="city  md:w-1/3 overflow-hidden" key={l.id}>
              <div className="image_holder overflow-hidden relative">
                <img
                  src={l.images}
                  className="h-[300px] rounded cursor-pointer hover:scale-125 transition duration-500"
                  alt=""
                />
              </div>
              <h2
                className="text-center mt-1 text-2xl uppercase font-bold0"
                style={{ color: headText }}>
                {l.name}
              </h2>
              <h5
                className="text-center mt-1 font-normal"
                style={{ color: paragraph }}>
                {l.branch}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
};
