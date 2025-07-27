import {
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiTypescript, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="">
      <h1 className="font-extrabold text-4xl flex justify-center mb-10 mt-10">
        TECH STACK
      </h1>
      <div className="flex justify-center gap-8 text-6xl ">
        <FaHtml5 className="bg-white text-purple-600 rounded-2xl py-2" />
        <FaJsSquare className="bg-white text-purple-600 rounded-2xl py-2" />
        <FaReact className="bg-white text-purple-600 rounded-2xl py-2" />
        <RiTailwindCssFill className="bg-white text-purple-600 rounded-2xl py-2" />
        <FaGithub className="bg-white text-purple-600 rounded-2xl py-2" />
        <FaNodeJs className="bg-white text-purple-600 rounded-2xl py-2" />
        <DiMongodb className="bg-white text-purple-600 rounded-2xl py-2" />
        <SiTypescript className="bg-white text-purple-600 rounded-2xl py-2" />
        <SiExpress className="bg-white text-purple-600 rounded-2xl py-2" />
      </div>
    </div>
  );
};

export default Skills;
