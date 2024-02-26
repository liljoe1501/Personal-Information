import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Props {
  year?: number;
  title: string;
  duration: string;
  details: string;
}

const WorkItem = ({ year, title, duration, details }: Props) => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ">
      <li
        className="mb-10 ml-4 "
        data-aos="fade-right"
        data-aos-duration="2000">
        <div
          className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <p
          className="flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm"
          data-aos="fade-right"
          data-aos-duration="2000">
          <span
            className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md"
            data-aos="fade-right"
            data-aos-duration="2000">
            {year}
          </span>
          <span
            className="text-lg font-semibold text-[#001b5e]"
            data-aos="fade-right">
            {title}
          </span>
          <span
            className="my-1 text-sm font-normal loading-none text-stone-400"
            data-aos="fade-right"
            data-aos-duration="2000">
            {duration}
          </span>
        </p>
        <p
          className="my-2 text-base fnt-normal text-stone-500"
          data-aos="fade-right"
          data-aos-duration="2000">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
