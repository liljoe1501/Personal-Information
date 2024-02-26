import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Javascript",
    duration: "React and Vue",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. Orci phasellus egestas tellus rutrum. Risus viverra adipiscing at in tellus integer feugiat. Ultrices sagittis orci a scelerisque. In ante metus dictum at tempor commodo ullamcorper. ",
  },
  {
    year: 2024,
    title: "PHP",
    duration: "Laravel",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. Orci phasellus egestas tellus rutrum. Risus viverra adipiscing at in tellus integer feugiat. Ultrices sagittis orci a scelerisque. In ante metus dictum at tempor commodo ullamcorper. ",
  },
  {
    year: 2024,
    title: "Python",
    duration: ".",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. Orci phasellus egestas tellus rutrum. Risus viverra adipiscing at in tellus integer feugiat. Ultrices sagittis orci a scelerisque. In ante metus dictum at tempor commodo ullamcorper. ",
  },
  {
    year: 2024,
    title: "C++",
    duration: ".",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet. Orci phasellus egestas tellus rutrum. Risus viverra adipiscing at in tellus integer feugiat. Ultrices sagittis orci a scelerisque. In ante metus dictum at tempor commodo ullamcorper. ",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040] m-auto md:pl-20 p-4  py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">Skills</h1>
      {data.map((data, idx) => (
        <WorkItem
          key={idx}
          year={data.year}
          title={data.title}
          duration={data.duration}
          details={data.details}
        />
      ))}
    </div>
  );
};

export default Work;
