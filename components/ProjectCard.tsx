import React from "react";
import { PortableText } from "@portabletext/react";

const ProjectCard = React.forwardRef(
  ({ onClick, href, title, body, image }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className="rounded-lg overflow-hidden shadow-lg bg-[#202036] shadow-[#3E3E69]/40 hover:brightness-110 cursor-pointer">
          <img className="w-full" src={image} alt="Twitter Clone" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#A1A1B5]">{title}</div>
            <div className="line-clamp-2 text-[#A1A1B5]">
              <PortableText value={body} />
            </div>
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
      </a>
    );
  }
);

export default ProjectCard;
