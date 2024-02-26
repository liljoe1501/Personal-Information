import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover "
        src="image/jeff.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[1040px] m-auto h-full w-full flex flex-col  lg:items-end items-center mt-5 py-5">
          <h1
            className="sm:text-5xl text:4xl font-bold text-gray-800 "
            data-aos-duration="2000"
            data-aos="fade-right">
            I'm Joefred Santiago
          </h1>
          <h2
            className="flex sm:text-5xl text-5xl pt-4 font-semibold text-gray-800"
            data-aos="fade-left">
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                "DEVELOPER", // Types 'One'
                2000, // Waits 1s
                "BSIT STUDENT",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
            />
          </h2>
          <div
            data-aos="fade-right"
            className="flex justify-between pt-6 max-w-[200px] w-full ">
            <a href="https://www.facebook.com/santiago.joefred">
              {" "}
              <FaFacebookF className="cursor-pointer" size={40} />{" "}
            </a>
            <FaTwitter className="cursor-pointer" size={40} />
            <a href="https://www.instagram.com/joefred.santiago/">
              {" "}
              <FaInstagram className="cursor-pointer" size={40} />{" "}
            </a>
            <FaLinkedinIn className="cursor-pointer" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
