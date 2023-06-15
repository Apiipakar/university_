import React from "react";
import { MdClose, MdEmail, MdLocationPin } from "react-icons/md";
import { brandColor } from "./Colors";

export const SubHeader = () => {
  return (
    <header
      className="hidden sm:flex w-full relative items-center "
      style={{ background: brandColor }}>
      <nav className="w-full md:w-11/12 flex items-center justify-between m-auto text-white py-1 capitalize text-sm">
        {/* left section */}
        <div className="left__ flex items-center gap-1">
          <MdLocationPin />
          <h4>Bossaaso, puntland, somalia</h4>
        </div>
        {/* right section */}
        <div className="right__ flex items-center gap-1">
          <MdEmail />
          <h4>University@gmail.com</h4>
          <button className="px-2 py-1 bg-none border border-white hover:bg-white hover:text-black transition-all ease-in duration-75 rounded ms-1">
            Contact
          </button>
        </div>
      </nav>
      <MdClose className="absolute right-5 text-white text-xl cursor-pointer hover:font-bold" />
    </header>
  );
};
