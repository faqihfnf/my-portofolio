import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{""} <span className="text-indigo-500">my recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 gap-y-2 mt-6">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className="flex items-center justify-center lg:min-h-[32.5rem] h-[25rem] sm:w-96 w-[80vw]">
            <PinContainer title={title} href={link}>
              <div className="relative flex justify-center items-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black-200">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-lg md-text-xs text-sm text-purple ">View This Project</p>
                  <FaArrowUpRightFromSquare className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
