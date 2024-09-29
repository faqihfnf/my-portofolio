import React from "react";
import { techStackIcons } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

function Skills() {
  return (
    <div className="py-32 mb-20" id="skills">
      <h1 className="heading mb-20">
        A small selection of{""} <span className="text-indigo-500">my skills</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards items={techStackIcons} direction="left" speed="normal" className=" md:mb-6 lg:mb-10" />
        <InfiniteMovingCards items={techStackIcons} direction="right" speed="normal" />
      </div>
    </div>
  );
}

export default Skills;
