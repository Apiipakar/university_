import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaMoon, FaSun } from "react-icons/fa";
import logo from "../../images/logo2.png";
import { Link, NavLink } from "react-router-dom";
import {
  darkColor,
  dayParagraphColor,
  lightColor,
  nightParagraphColor,
  secondaryColor,
} from "./Colors";
import { MdSunny } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

// main function of program
export const Header = ({
  theme,
  setTheme,
  paragraph,
  setParagraph,
  headText,
  setHeadText,
}) => {
  const [drop, setDrop] = useState("none");
  const [showDrop, setShowDrop] = useState("none");
  const [mobile, setMobile] = useState("none");
  return (
    <header
      className="main_header w-full capitalize shadow sticky top-0 left-0 right-0 z-[1000]"
      style={{ background: theme }}>
      <nav className="p-1 md:p-0 w-full lg:w-11/12 flex items-center justify-between m-auto   capitalize">
        {/* logo and name */}
        <div className="logo flex gap-1 items-center">
          <img src={logo} alt="" width="40px" className="p-0.5" />
          <h2
            className="font-bold uppercase text-1xl md:text-2xl"
            style={{ color: headText }}>
            University
          </h2>
        </div>

        {/* desktop menu bar */}
        <div className="hidden lg:flex desktop_menu">
          <ul className="flex items-center ">
            <li className="list-none">
              <NavLink
                className="px-2 ms-1 py-2.5 font-sans font-semibold hover:opacity-90 text-sm"
                style={{ color: paragraph }}>
                Home
              </NavLink>
            </li>
            <li className="list-none">
              <Link
                onClick={() => {
                  let history = document.getElementById("history");
                  history.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-2 ms-1 py-2 font-sans font-semibold hover:opacity-90 text-sm"
                style={{ color: paragraph }}>
                history
              </Link>
            </li>
            <li className="list-none">
              <Link
                onClick={() => {
                  let Application = document.getElementById("Application");
                  Application.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-2 ms-1 py-2 font-sans font-semibold hover:opacity-90 text-sm"
                style={{ color: paragraph }}>
                Application
              </Link>
            </li>
            <li className="list-none">
              <NavLink
                to="/Repository"
                className="px-2 ms-1 py-2 font-sans font-semibold hover:opacity-90 text-sm"
                style={{ color: paragraph }}>
                Repository
              </NavLink>
            </li>
            <li className="list-none relative ">
              <Link
                className="px-2 ms-1 py-2 font-sans font-semibold hover:opacity-90 text-sm flex items-center gap-0.5"
                style={{ color: paragraph }}>
                Login
                {showDrop === "none" ? (
                  <FaAngleDown
                    onClick={() => {
                      setShowDrop("flex");
                    }}
                  />
                ) : (
                  <FaAngleUp
                    onClick={() => {
                      setShowDrop("none");
                    }}
                  />
                )}
              </Link>

              <Fade top>
                <ul
                  className="absolute top-10 rounded-b left-3 shadow-xl flex flex-col z-50 w-52"
                  style={{ background: theme, display: showDrop }}>
                  <li className="border-b border-sky-200 px-1 py-2 hover:bg-sky-300">
                    <Link style={{ color: paragraph }}>Admin Login</Link>
                  </li>
                  <li className="border-b border-sky-200 px-1 py-2 hover:bg-sky-300">
                    <Link style={{ color: paragraph }}>Teacher Login</Link>
                  </li>
                  <li className="px-1 py-2 hover:bg-sky-300">
                    <Link style={{ color: paragraph }}>Student Login</Link>
                  </li>
                </ul>
              </Fade>
            </li>
            <li className="list-none">
              <NavLink
                to="/News"
                className="px-2 ms-1 py-2 font-sans font-semibold hover:opacity-90 text-sm"
                style={{ color: paragraph }}>
                News
              </NavLink>
            </li>
          </ul>
        </div>

        {/* control bars both mobile and desktop */}
        <div className="flex items-center gap-2 controll_btns">
          {/* handle theme */}
          {theme === lightColor ? (
            <FaMoon
              className="text-2xl cursor-pointer"
              color="gold"
              onClick={() => {
                if (
                  theme === lightColor &&
                  paragraph === dayParagraphColor &&
                  headText === secondaryColor
                ) {
                  localStorage.setItem("DarkTheme", theme);
                  localStorage.setItem("DarkThemeHeading", headText);
                  localStorage.setItem("DarkThemeParagraph", paragraph);
                  setTheme(darkColor);
                  setHeadText(lightColor);
                  setParagraph(nightParagraphColor);
                }
              }}
            />
          ) : (
            <MdSunny
              className="text-2xl cursor-pointer"
              color="gold"
              onClick={() => {
                if (
                  theme === darkColor &&
                  paragraph === nightParagraphColor &&
                  headText === lightColor
                ) {
                  setTheme(lightColor);
                  setHeadText(secondaryColor);
                  setParagraph(dayParagraphColor);
                  localStorage.removeItem("DarkTheme");
                  localStorage.removeItem("DarkThemeHeading");
                  localStorage.removeItem("DarkThemeParagraph");
                }
              }}
            />
          )}
          {/* handle mobile menu */}
          <FaBars
            style={{ color: headText }}
            className="lg:hidden me-3 text-2xl"
            onClick={() => {
              mobile === "none" ? setMobile("block") : setMobile("none");
            }}
          />
        </div>
      </nav>
      {/* mobile Menu */}
      <div
        className=" mobile_menu w-full h-screen lg:hidden  overflow-hidden"
        style={{ background: theme, display: mobile }}>
        <ul className="flex w-full gap-0.5 flex-col">
          {/* home */}
          <li className="w-full mt-1 flex">
            <NavLink
              className="w-full py-3 px-2 flex-1 text-xl"
              to="/"
              style={{ color: paragraph }}>
              Home
            </NavLink>
          </li>
          {/* history */}
          <li className="w-full mt-1 flex">
            <Link
              onClick={() => {
                let history = document.getElementById("history");
                history.scrollIntoView({ behavior: "smooth" });
                setMobile("none");
              }}
              className="w-full py-3 px-2 flex-1 text-xl"
              style={{ color: paragraph }}>
              History
            </Link>
          </li>
          {/* application */}
          <li className="w-full mt-1 flex">
            <Link
              onClick={() => {
                let Application = document.getElementById("Application");
                Application.scrollIntoView({ behavior: "smooth" });
                setMobile("none");
              }}
              className="w-full py-3 px-2 flex-1 text-xl"
              style={{ color: paragraph }}>
              Application
            </Link>
          </li>
          {/* repositories */}
          <li className="w-full mt-1 flex">
            <NavLink
              className="w-full py-3 px-2 flex-1 text-xl"
              style={{ color: paragraph }}
              to="/Repository">
              Repository
            </NavLink>
          </li>
          {/* login */}
          <li className="w-full mt-1 flex flex-col">
            <Link
              className="w-full py-3 px-2 flex-1 text-xl flex justify-between"
              style={{ color: paragraph }}
              to="#">
              <Link>Login</Link>
              {drop === "none" ? (
                <FaAngleDown
                  onClick={() => {
                    setDrop("block");
                  }}
                />
              ) : (
                <FaAngleUp
                  onClick={() => {
                    setDrop("none");
                  }}
                />
              )}
            </Link>
            {/* drop down */}
            <ul className="w-full bg-gray-300 " style={{ display: drop }}>
              <li className="w-full flex px-1 py-1">
                <NavLink className="w-full flex-1 px-1 py-2" to="/AdminLogin">
                  Admin Login
                </NavLink>
              </li>
              <li className="w-full flex px-1 py-1">
                <NavLink className="w-full flex-1 px-1 py-2" to="/TeacherLogin">
                  Teacher Login
                </NavLink>
              </li>
              <li className="w-full flex px-1 py-1">
                <NavLink className="w-full flex-1 px-1 py-2" to="/StudentLogin">
                  Student Login
                </NavLink>
              </li>
            </ul>
            {/* drop down */}
          </li>
          {/* news */}
          <li className="w-full mt-1 flex">
            <NavLink
              className="w-full py-3 px-2 flex-1 text-xl"
              to="/News"
              style={{ color: paragraph }}>
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
