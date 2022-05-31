import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";

function Hero() {
  return (
    <div className="container mx-auto max-w-2xl px-4 md:px-8 pt-40 md:pt-48">
      <div className="flex items-center space-x-3">
        <img
          src="profile.jpg"
          alt="profile-img"
          className="h-16 w-16 rounded-full ring-4 ring-[#3E3E69]"
        />
        <div className="pl-3 space-y-2">
          <h1 className="tracking-widest text-3xl font-bold text-[#A1A1B5]">
            WYATT
          </h1>
          <h2 className="text-xl text-[#A1A1B5]">
            <ReactTypingEffect
              text={["Developer", "Designer"]}
              speed={100}
              typingDelay={1000}
            />
          </h2>
        </div>
      </div>
      <p className="text-[#A1A1B5] text-xl pt-10">
        Welcome to my digital garden where I share what I'm learning about
        shipping great products, becoming a better developer and growing a
        career in tech.
      </p>
      <div className="flex px-1 pt-8 md:pt-12 gap-12">
        <div className="flex flex-col items-center space-y-1 cursor-pointer transition ease-in-out delay-150 hover:scale-125 hover:duration-300 ">
          <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5] ">
            <BriefcaseIcon className="rounded h-6 w-6 fill-white " />
          </div>
          <p className="text-[#A1A1B5] text-md">LinkedIn</p>
        </div>
        <div className="flex flex-col items-center space-y-1 cursor-pointer transition ease-in-out delay-150 hover:scale-125 hover:duration-300 ">
          <div className="flex items-center justify-center rounded h-8 w-8 bg-gradient-to-r from-[#3E3E69] to-[#A1A1B5] ">
            <CodeIcon className="rounded h-6 w-6 fill-white " />
          </div>
          <p className="text-[#A1A1B5] text-md">Github</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
