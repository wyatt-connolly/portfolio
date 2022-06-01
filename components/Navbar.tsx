import React, { useState, useEffect } from "react";
import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={showNavbar ? "block" : "hidden"}>
      <nav className="rounded-lg container max-w-2xl fixed w-full z-10 top-6 py-2 px-6 flex justify-between backdrop-blur-sm">
        <img
          src="profile.jpg"
          alt="profile-img"
          className="h-12 w-12 rounded-full ring-4 ring-[#3E3E69]"
        />
        <div className="flex space-x-3">
          <div className="flex flex-col items-center cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:duration-300">
            <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5] ">
              <BriefcaseIcon className="rounded h-6 w-6 fill-white " />
            </div>
            <p className="text-[#A1A1B5] text-md">LinkedIn</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer transition ease-in-out delay-150 hover:scale-110 hover:duration-300 ">
            <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5] ">
              <CodeIcon className="rounded h-6 w-6 fill-white " />
            </div>
            <p className="text-[#A1A1B5] text-md">Github</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
