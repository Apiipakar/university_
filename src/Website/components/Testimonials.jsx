import React from "react";
import personOne from "../../images/personOne.jpg";
import graduation from "../../images/graduation.jpg";
import { MdStar, MdStarHalf } from "react-icons/md";
import Zoom from "react-reveal/Zoom";

// main program function
export const Testimonials = () => {
  return (
    <section
      className="w-full h-max mt-[50px] py-2"
      style={{
        background: `linear-gradient(to top, rgba(0,0,99,0.4),rgba(0,0,99,0.8)),url(${graduation})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <h1 className="text-3xl text-white text-center py-1 font-semibold">
        Testimonials
      </h1>
      <div className="section_row w-full md:w-11/12 h-max md:m-auto md:flex px-2 md:px-0 items-center gap-3">
        {/* First comment */}
        <Zoom>
          <div className="left__ flex  p-2 bg-blue-800 bg-opacity-80 md:w-2/4 h-[350px] my-4 rounded">
            {/* user description */}
            <div className="left_side text-white bg-opacity-50 rounded w-1/2 flex flex-col gap-1 items-center justify-center">
              <div className="image_Holder">
                <img
                  src={personOne}
                  className="rounded-full w-[120px] h-[120px] border border-white"
                  alt=""
                />
              </div>
              <h2 className="text-sm md:text-xl font-bold uppercase">
                Apiipakar mohamoud
              </h2>
              <h2 className="text-center text-sm font-semibold">Student</h2>
              <h5 className="text-sm font-semibold">2011-2016</h5>
              <div className="rating flex flex-row">
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStarHalf color="orange" />
              </div>
            </div>
            {/* comments */}
            <div className="Comment  bg-opacity-50 rounded w-1/2 flex flex-col gap-1 items-center justify-center">
              <p className="comment text-[12px] lg:text-sm p-1 rounded text-white font-serif font-medium">
                <span className="md:text-2xl font-bold">"</span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam voluptas non
                velit blanditiis ratione cupiditate qui dolorem. Numquam, facere
                quae. non velit blanditiis ratione cupiditate qui dolorem.
                Numquam, facere quae. non velit blanditiis ratione cupiditate
                qui dolorem. Numquam, facere quae.
                <span className="text-2xl font-bold">"</span>
              </p>
              <p className="text-white">2020/12/23</p>
            </div>
          </div>
        </Zoom>
        {/* Second comment */}
        <Zoom>
          <div className="left__ flex  p-2 bg-blue-800 bg-opacity-80 md:w-2/4 h-[350px] my-4 rounded">
            {/* user description */}
            <div className="left_side text-white bg-opacity-50 rounded w-1/2 flex flex-col gap-1 items-center justify-center">
              <div className="image_Holder">
                <img
                  src={personOne}
                  className="rounded-full w-[120px] h-[120px] border border-white"
                  alt=""
                />
              </div>
              <h2 className="text-sm md:text-xl font-bold uppercase">
                Apiipakar mohamoud
              </h2>
              <h2 className="text-center text-sm font-semibold">Student</h2>
              <h5 className="text-sm font-semibold">2011-2016</h5>
              <div className="rating flex flex-row">
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStar color="orange" />
                <MdStarHalf color="orange" />
              </div>
            </div>
            {/* comments */}
            <div className="Comment  bg-opacity-50 rounded w-1/2 flex flex-col gap-1 items-center justify-center">
              <p className="comment text-[12px] lg:text-sm p-1 rounded text-white font-serif font-medium">
                <span className="md:text-2xl font-bold">"</span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam voluptas non
                velit blanditiis ratione cupiditate qui dolorem. Numquam, facere
                quae. non velit blanditiis ratione cupiditate qui dolorem.
                Numquam, facere quae. non velit blanditiis ratione cupiditate
                qui dolorem. Numquam, facere quae.
                <span className="text-2xl font-bold">"</span>
              </p>
              <p className="text-white">2020/12/23</p>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};
