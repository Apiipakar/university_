import React from "react";
import logo from "../../images/logo2.png";
import { brandColor } from "./Colors";

// main program function.
export const Footer = ({ theme, headText, paragraph }) => {
  return (
    <section
      id="footer"
      className="footer_section w-full "
      style={{ background: theme }}>
      <div className="row">
        <div className="px-3 md:px-0 footer_row md:w-11/12 md:m-auto md:flex py-5 border-t border-white/25">
          {/* column one */}
          <div className="footer_col_one md:w-1/2">
            <h2
              style={{ color: headText }}
              className="md:text-3xl font-bold capitalize">
              university of world
            </h2>
            <p style={{ color: paragraph }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Est aut minus earum accusamus officiis natus excepturi
            </p>
            <div className="sponsors flex gap-2">
              <img src={logo} alt="" className="w-[90px] m-1" />
              <img src={logo} alt="" className="w-[90px] m-1" />
              <img src={logo} alt="" className="w-[90px] m-1" />
            </div>
          </div>
          {/* column two */}
          <div className="footer_col_two md:w-1/2  md:flex md:gap-0 md:justify-between">
            <ul>
              <h4 style={{ color: headText }} className="md:text-2xl font-bold">
                Links
              </h4>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                home
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                History
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Application
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Repository
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                contact
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                News
              </li>
            </ul>

            <ul>
              <h4 style={{ color: headText }} className="md:text-2xl font-bold">
                Social
              </h4>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Facebook
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                instagram
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Youtube
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Twitter
              </li>
            </ul>

            <ul>
              <h4 style={{ color: headText }} className="md:text-2xl font-bold">
                Contact
              </h4>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Contact Us
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Support
              </li>
              <li
                style={{ color: paragraph }}
                className="hover:underline cursor-pointer capitalize py-1">
                Submit Request
              </li>
              <input
                type="text"
                placeholder="Enter your Email"
                className="px-1 py-1 outline-none bg-transparent border-b rounded"
              />
              <button className="block px-2 py-1 bg-white text-black mt-3 font-semibold rounded">
                Subscribe
              </button>
            </ul>
          </div>
        </div>
        {/* second and last row */}
        <div className="px-3 md:px-0  second_row w-full items-center md:w-11/12 md:m-auto flex justify-between">
          {/* left section */}
          <div className="left__ flex flex-row gap-2 text-sm ">
            <h5
              className="cursor-pointer hover:font-medium text-[8px] md:text-sm"
              style={{ color: paragraph }}>
              Policy
            </h5>
            <span>|</span>
            <h5
              className="cursor-pointer hover:font-medium text-[8px] md:text-sm"
              style={{ color: paragraph }}>
              Term of Use
            </h5>
            <span>|</span>
            <h5
              className="cursor-pointer hover:font-medium text-[8px] md:text-sm"
              style={{ color: paragraph }}>
              Refund Policy
            </h5>
          </div>
          {/* right section */}
          <div className="right__ flex text-sm gap-2 ">
            <h5
              className="cursor-pointer hover:font-medium text-[8px] md:text-sm"
              style={{ color: paragraph }}>
              Copyright@ | All right reserved 2023-2024
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
