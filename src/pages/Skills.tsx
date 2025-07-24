import {
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div id="Skills" className="">
      <h1 className="font-extrabold text-4xl flex justify-center mb-10 mt-10">
        TECH STACK
      </h1>
      <div className="flex justify-center gap-8 text-6xl ">
        <FaJsSquare />
        <FaHtml5 />
        <FaReact />
        <RiTailwindCssFill />
        <FaGithub />
        <FaNodeJs />
        <DiMongodb />
      </div>
    </div>
  );
};

export default Skills;
