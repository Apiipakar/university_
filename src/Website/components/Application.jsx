import React, { useState } from "react";
import { facultyData } from "./ServiceData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { brandColor } from "./Colors";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import { CardSlider } from "./CardSlider";
import { Certificate } from "./Certificate";
import { Cities } from "./Cities";
import { Counter } from "./Counter";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Testimonials } from "./Testimonials";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";

// main function
export const Application = ({ theme, headText, paragraph }) => {
  const [answerOne, setAnswerOne] = useState("none");
  const [answerTwo, setAnswerTwo] = useState("none");
  const [answerThree, setAnswerThree] = useState("none");
  return (
    <section
      className="w-full py-6 h-max scroll-smooth"
      style={{ background: theme }}>
      {/* begin of Application */}
      <div className="w-full md:w-11/12 capitalize md:m-auto" id="Application">
        <h1 style={{ color: headText }} className="text-2xl">
          Service that university offers
        </h1>
        <p style={{ color: paragraph }} className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          provident quis incidunt eius?
        </p>

        {/* main slide container */}
        <div className="slide_container flex flex-col relative items-center w-full overflow-hidden justify-center">
          {/* slide btns */}
          <div className="hidden md:flex btns_for_slide  gap-1 absolute w-full justify-between z-10">
            <MdChevronLeft
              className="w-[30px] rounded-full bg-black bg-opacity-50 h-[30px] text-white m-1 hover:bg-opacity-100 cursor-pointer"
              onClick={() => {
                let slider = document.getElementById("slider");
                slider.scrollLeft -= 500;
              }}
            />
            <MdChevronRight
              className="w-[30px] rounded-full bg-black bg-opacity-50 h-[30px] text-white m-1 hover:bg-opacity-100 cursor-pointer"
              onClick={() => {
                let slider = document.getElementById("slider");
                slider.scrollLeft += 700;
              }}
            />
          </div>

          <div
            className="slideHolder w-full overflow-x-scroll md:overflow-hidden"
            id="slider">
            <CardSlider
              theme={theme}
              paragraph={paragraph}
              headText={headText}
            />
          </div>
        </div>

        <Certificate theme={theme} paragraph={paragraph} headText={headText} />
        <Cities theme={theme} paragraph={paragraph} headText={headText} />
      </div>
      <Counter />
      <div className="w-full md:w-11/12 capitalize md:m-auto">
        <h1
          className="text-center text-3xl font-bold mt-[50px]"
          style={{ color: headText }}>
          Answers of some questions
        </h1>
        {/* question one */}
        <div className="question w-11/12 px-2 py-3 md:w-3/4 bg-blue-900 items-center md:p-6 m-auto mt-4 flex justify-between">
          <h2 className="text-sm md:text-xl text-white font-bold">
            How does university deal with new students ?
          </h2>
          {answerOne === "none" ? (
            <FaPlus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerOne("flex");
              }}
            />
          ) : (
            <FaMinus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerOne("none");
              }}
            />
          )}
        </div>
        {/* answer one */}
        <Fade top>
          <div className="answer w-11/12 md:w-3/4  bg-gray-300 items-center  m-auto rounded-b flex justify-between">
            <h5 className="text-sm py-5 px-3" style={{ display: answerOne }}>
              Students Set And Listens New Students For They Ere Opinion And
              They Allow Students To Choose Their Hoppy Faculty
            </h5>
          </div>
        </Fade>
        {/* question two */}
        <div className="question w-11/12 px-2 py-3 md:w-3/4 bg-blue-900 items-center md:p-6 m-auto mt-4 flex justify-between">
          <h2 className="text-sm md:text-xl text-white font-bold">
            How does university deal with new students ?
          </h2>
          {answerTwo === "none" ? (
            <FaPlus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerTwo("flex");
              }}
            />
          ) : (
            <FaMinus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerTwo("none");
              }}
            />
          )}
        </div>
        {/* answer two */}
        <Fade top>
          <div className="answer w-11/12 md:w-3/4  bg-gray-300 items-center  m-auto rounded-b flex justify-between">
            <h5 className="text-sm py-5 px-3" style={{ display: answerTwo }}>
              Students Set And Listens New Students For They Ere Opinion And
              They Allow Students To Choose Their Hoppy Faculty
            </h5>
          </div>
        </Fade>
        {/* question three */}{" "}
        <div className="question w-11/12 px-2 py-3 md:w-3/4 bg-blue-900 items-center md:p-6 m-auto mt-4 flex justify-between">
          <h2 className="text-sm md:text-xl text-white font-bold">
            How does university deal with new students ?
          </h2>
          {answerThree === "none" ? (
            <FaPlus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerThree("flex");
              }}
            />
          ) : (
            <FaMinus
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setAnswerThree("none");
              }}
            />
          )}
        </div>
        {/* answer Three */}
        <Fade top>
          <div className="answer w-11/12 md:w-3/4  bg-gray-300 items-center  m-auto rounded-b flex justify-between">
            <h5 className="text-sm py-5 px-3" style={{ display: answerThree }}>
              Students Set And Listens New Students For They Ere Opinion And
              They Allow Students To Choose Their Hoppy Faculty
            </h5>
          </div>
        </Fade>
      </div>
      <Testimonials />
      <div className="w-full md:w-11/12 capitalize md:m-auto">
        <Zoom>
          <Gallery theme={theme} paragraph={paragraph} headText={headText} />
        </Zoom>
        <Contact theme={theme} paragraph={paragraph} headText={headText} />
      </div>
    </section>
  );
};
