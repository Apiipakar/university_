import React, { useEffect, useState } from "react";
import {
  darkColor,
  dayHeadingTextColor,
  dayParagraphColor,
  lightColor,
  nightParagraphColor,
  secondaryColor,
} from "../components/Colors";
import { SubHeader } from "../components/SubHeader";
import { Header } from "../components/Header";
import { History } from "../components/History";
import { Preview } from "../components/Preview";
import { Application } from "../components/Application";
import { FaAngleUp, FaArrowUp } from "react-icons/fa";
import { Footer } from "../components/Footer";

// Main function program
export const Home = () => {
  const [theme, setTheme] = useState(lightColor);
  const [headText, setHeadText] = useState(secondaryColor);
  const [paragraph, setParagraph] = useState(dayParagraphColor);
  const [showGotoUp, setGotoUp] = useState("none");

  useEffect(() => {
    let darkMOde = localStorage.getItem("DarkTheme");
    let darkHeading = localStorage.getItem("DarkThemeHeading");
    let darkParagraph = localStorage.getItem("DarkThemeParagraph");

    if (darkMOde && darkHeading && darkParagraph) {
      setTheme(darkColor);
      setHeadText(lightColor);
      setParagraph(nightParagraphColor);
    } else {
      localStorage.removeItem("DarkTheme");
      localStorage.removeItem("DarkThemeHeading");
      localStorage.removeItem("DarkThemeParagraph");
    }
    if (window.pageYOffset > 550) {
      setGotoUp("block");
    } else {
      setGotoUp("none");
    }
  }, []);
  return (
    <>
      <SubHeader />
      <Header
        theme={theme}
        setTheme={setTheme}
        paragraph={paragraph}
        setParagraph={setParagraph}
        headText={headText}
        setHeadText={setHeadText}
      />
      <Preview
        theme={theme}
        setTheme={setTheme}
        paragraph={paragraph}
        setParagraph={setParagraph}
        headText={headText}
        setHeadText={setHeadText}
      />
      <History theme={theme} paragraph={paragraph} headText={headText} />
      <Application theme={theme} paragraph={paragraph} headText={headText} />
      <Footer theme={theme} paragraph={paragraph} headText={headText} />
      <FaAngleUp
        className="fixed bg-black rounded-full bg-opacity-25 cursor-pointer text-black hover:text-white hover:bg-opacity-100 right-4 w-[40px] h-[40px] bottom-5 z-10"
        style={{ display: showGotoUp }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};
