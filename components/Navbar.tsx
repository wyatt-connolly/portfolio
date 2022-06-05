import React, { useState, useEffect, useContext } from "react";
import { NavContext } from "../lib/atom";
import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";

export default function Navbar({ showNavbar }) {
  return (
    <div className="container mx-auto max-w-2xl">
      <div className={showNavbar ? "block" : "hidden"}>
        <nav className="rounded-lg container max-w-2xl fixed z-10 top-6 py-2 px-8 flex justify-between backdrop-blur-sm ">
          <img
            src="profile.jpg"
            alt="profile-img"
            className="h-12 w-12 rounded-full ring-4 ring-[#3E3E69]"
          />
          <div className="flex space-x-3 md:space-x-12">
            <a
              href="https://www.linkedin.com/in/wyatt-connolly-a37688238/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <div className="flex flex-col md:flex-row md:space-x-2 items-center cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:duration-300">
                <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5]">
                  <BriefcaseIcon className="rounded h-6 w-6 fill-white " />
                </div>
                <p className="text-[#A1A1B5] text-md">LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/wyatt-connolly"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <div className="flex flex-col md:flex-row md:space-x-2 items-center cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:duration-300 ">
                <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5] ">
                  <CodeIcon className="rounded h-6 w-6 fill-white " />
                </div>
                <p className="text-[#A1A1B5] text-md">Github</p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
