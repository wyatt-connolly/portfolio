import React from "react";

export default function ProjectCard({ title, description, image }) {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg bg-[#202036] shadow-[#3E3E69]/40 border-solid border-2 border-indigo-600 hover:brightness-105 cursor-pointer">
        <img className="w-full" src={image} alt="Twitter Clone" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-[#A1A1B5]">{title}</div>
          <p className="text-[#A1A1B5] text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Demo
          </button>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
