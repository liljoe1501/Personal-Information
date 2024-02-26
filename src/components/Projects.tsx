import React from "react";
import ProjectItem from "./ProjectItem";
import coc from "../assets/coc.png";
import csgo from "../assets/csgo.jpg";
import dota from "../assets/dota.jpg";
import ml from "../assets/ml.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1
        className="text-4xl font-bold text-center text-[#001b5e"
        data-aos="fade-down"
        data-aos-duration="2000">
        Online Games
      </h1>
      <p
        className="text-center py-8"
        data-aos="fade-down"
        data-aos-duration="2000">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
        recusandae, facere quas dignissimos eaque quos rerum optio! Minima
        cumque dolore dicta nostrum alias, nesciunt doloribus tempora fuga vitae
        deserunt nemo praesentium eius optio adipisci natus consectetur cum
        expedita? Animi, ad!
      </p>
      <div
        className="grid sm:grid-cols-2 gap-12"
        data-aos="fade-up"
        data-aos-duration="2000">
        <ProjectItem img={ml} title="Mobile Legends" />
        <ProjectItem img={coc} title="Clash of Clans" />
        <ProjectItem img={dota} title="DOTA 2" />
        <ProjectItem img={csgo} title="CS:GO" />
      </div>
    </div>
  );
};

export default Projects;
