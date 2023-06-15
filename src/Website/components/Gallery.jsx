import React from "react";
import computer from "../../images/informatonTechnology.jpg";
import medicine from "../../images/medicine.jpg";
import Veterinary from "../../images/veterinary.jpg";
import Education from "../../images/Education.jpg";
import Engineering from "../../images/engineering.jpg";
import Accounting from "../../images/Accounting.jpg";
import Dental from "../../images/dental.jpg";
import Economic from "../../images/Economic.jpg";
import sharia from "../../images/sharia.jpg";
import Marine from "../../images/master.jpg";
import gradutaion from "../../images/graduation.jpg";

export const Gallery = ({ headText, paragraph }) => {
  return (
    <section className="gallery__ flex flex-col gap-2 mt-[50px]">
      <h2
        className="text-center  mb-3 text-3xl font-bold"
        style={{ color: headText }}>
        Our Gallery
      </h2>
      {/* first images row */}
      <div className="rowOne w-full flex flex-row px-1 gap-[1px] md:gap-2  h-max">
        <img src={medicine} alt="" className="w-1/4 md:h-[280px]" />
        <img src={Dental} alt="" className="w-2/4 md:h-[280px]" />
        <img src={Economic} alt="" className="w-1/4 md:h-[280px]" />
      </div>
      {/* second images row */}
      <div className="rowOne w-full flex flex-row px-1 gap-[1px] md:gap-2  h-max">
        <img src={gradutaion} alt="" className="w-3/4 h-[205px] md:h-[565px]" />
        <div className="w-1/4  flex flex-col gap-1">
          <img
            src={Veterinary}
            alt=""
            className="w-full h-[100px] md:h-[280px]"
          />
          <img
            src={Accounting}
            alt=""
            className="w-full h-[100px] md:h-[280px]"
          />
        </div>
      </div>
      {/* third images row */}{" "}
      <div className="rowOne w-full flex flex-row px-1 gap-[1px] md:gap-2  h-max">
        <img src={sharia} alt="" className="w-1/4 md:h-[280px]" />
        <img src={Marine} alt="" className="w-2/4 md:h-[280px]" />
        <img src={Engineering} alt="" className="w-1/4 md:h-[280px]" />
      </div>
    </section>
  );
};
