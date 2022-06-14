import React, { useState, useEffect, useContext } from "react";
import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { navState } from "../lib/atom";
import Link from "next/link";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useRecoilState(navState);

  return (
    <nav className={showNavbar ? "fixed top-6 z-30 w-full" : "hidden"}>
      <div className="mx-auto w-full px-4 md:px-8 sm:max-w-screen-sm">
        <div className="flex items-center justify-between rounded-2xl bg-white/[3%] px-4 py-2.5 shadow-surface-glass backdrop-blur backdrop-filter firefox:bg-gray-900 firefox:bg-opacity-90">
          <Link href="/">
            <img
              src="profile.jpg"
              alt="Navigation Profile Image"
              className="h-12 w-12 rounded-full ring-4 ring-[#3E3E69] cursor-pointer"
            />
          </Link>
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
        </div>
      </div>
    </nav>
  );
}
