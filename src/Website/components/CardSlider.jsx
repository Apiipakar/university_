import React from "react";

import { facultyData } from "./ServiceData";
import { brandColor } from "./Colors";
export const CardSlider = ({ theme, headText, paragraph }) => {
  return (
    <div className="slider w-max gap-3 flex  h-max p-1">
      {facultyData.map((f) => {
        return (
          <div
            className="slide rounded overflow-hidden shadow-2xl w-[300px] md:w-[300px] p-1 md:p-0 border-[#eee] h-[400px] md:h-[380] relative"
            style={{ background: theme }}
            key={f.id}>
            <img src={f.image} className="w-full h-[220px]" alt="" />
            <h3 className="px-1 py-0.5" style={{ color: headText }}>
              Faculty of {f.facultyName}
            </h3>
            <p className="px-1 py-0.5 text-sm" style={{ color: paragraph }}>
              {f.description}
            </p>
            <h6 className="px-1 py-0.5 text-sm text-red-500 font-bold">
              {f.year}
            </h6>
            {/*card btns */}

            <div className="absolute flex gap-1 bottom-0 w-full">
              <button
                className="px-2 py-1 w-3/4 text-white"
                style={{ background: brandColor }}>
                See more
              </button>
              <button
                className="px-2 py-1 w-1/4 text-white"
                style={{ background: brandColor }}>
                Enroll
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
