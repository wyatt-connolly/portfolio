import React from "react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Project } from "../interfaces";

const ProjectCard = ({
  name,
  body,
  image,
  slug,
  demoUrl,
  githubUrl,
}: Project) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-[#202036] shadow-[#3E3E69]/40 hover:brightness-110 ">
      <Link href={`/post/[slug]`} as={`/post/${slug.current}`}>
        <img
          className="w-full cursor-pointer "
          src={image}
          alt="Twitter Clone"
        />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#A1A1B5]">{name}</div>
        <div className="line-clamp-2 text-[#A1A1B5]">
          <PortableText<any> value={body} />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
          href={demoUrl}
          target="blank"
        >
          Demo
        </a>
        <a
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"
          href={githubUrl}
          target="blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
