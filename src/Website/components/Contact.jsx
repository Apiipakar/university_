import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { brandColor } from "./Colors";

export const Contact = ({ headText, paragraph }) => {
  // states and normal variables

  // functions
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mt-[50px] w-full mb-[50px]">
      <h1
        className="text-3xl font-bold text-center"
        style={{ color: headText }}>
        Contact us
      </h1>
      <div className="contact__ px-3 md:px-0 md:flex w-full mt-[50px]">
        {/* contact info side */}
        <div className="address__ flex flex-col  md:w-1/2 gap-10 ">
          {/* address */}
          <div className="main_address">
            <h1 className="font-bold" style={{ color: headText }}>
              Address
            </h1>
            <p className="mt-1" style={{ color: paragraph }}>
              4801 South University Drive Suite 237, Ft. <br />
              Lauderdale, FL 33328, United States
            </p>
          </div>
          {/* phone */}
          <div className="phone">
            <h1 className="font-bold" style={{ color: headText }}>
              Phone
            </h1>
            <p
              className="mt-1 text-sm font-semibold flex items-center gap-2"
              style={{ color: paragraph }}>
              <MdPhone /> +2529070082398
            </p>
            <p
              className="mt-1 text-sm font-semibold flex items-center gap-2"
              style={{ color: paragraph }}>
              <MdPhone /> +252907974193
            </p>
          </div>
          {/* email */}
          <div className="email">
            <h1 className="font-bold" style={{ color: headText }}>
              Email
            </h1>
            <p
              className="mt-1 text-sm font-semibold flex items-center gap-2"
              style={{ color: paragraph }}>
              <MdEmail /> university@university.com
            </p>
          </div>
        </div>
        {/* form side */}
        <form
          className="md:w-1/2  mt-10 md:mt-0 flex flex-col"
          onSubmit={handleForm}>
          <input
            type="text"
            className=" outline-none bg-transparent border-b border-sky-900"
            placeholder="Name"
            style={{ color: paragraph }}
          />
          <input
            type="text"
            className=" outline-none bg-transparent mt-12 border-b border-sky-900"
            placeholder="Email"
            style={{ color: paragraph }}
          />
          <input
            type="text"
            className=" outline-none bg-transparent mt-12 border-b border-sky-900"
            placeholder="Phone"
            style={{ color: paragraph }}
          />
          <input
            type="text"
            className=" outline-none bg-transparent mt-12 border-b border-sky-900"
            placeholder="Message"
            style={{ color: paragraph }}
          />
          <input
            type="submit"
            value="Send"
            className="w-max px-3 py-1 text-white cursor-pointer mt-6"
            style={{ background: brandColor }}
          />
        </form>
      </div>
    </section>
  );
};
