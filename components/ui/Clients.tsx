import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { techStackIcons, testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-2" id="">
      <h1 className="heading mb-10">
        A small selection of{""} <span className="text-indigo-500">my skills</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards items={techStackIcons} direction="left" speed="normal" />
        <InfiniteMovingCards items={techStackIcons} direction="right" speed="normal" />
      </div>
    </div>
  );
}

export default Clients;
