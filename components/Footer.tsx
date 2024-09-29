"use client";
import React from "react";
import CopyButton from "./ui/CopyButton";
import { socialMedia } from "@/data";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-40" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-indigo-500">your digital project</span> to the next level?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">Reach out to me today and let's build something great together.</p>
        <a href="mailto:faqih.fnf@gmail.com">
          <CopyButton title="Let's get in touch" icon={<PiPaperPlaneTiltFill />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Created by Faqih Nur Fahmi © 2024</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg bg-black-200 border border-black-300 dark:border-slate-700 hover:bg-indigo-600 hover:border-indigo-600"
            >
              <img src={profile.img} alt={profile.id} onClick={() => window.open(profile.link, "_blank")} style={{ cursor: "pointer" }} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
