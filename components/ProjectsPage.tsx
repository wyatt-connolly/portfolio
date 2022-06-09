import React from "react";
import ProjectCard from "./ProjectCard";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import { Projects } from "../interfaces";
import type { NextPage } from "next";

interface Props {
  projects?: [Projects];
}

const ProjectsPage: NextPage<Props> = ({ projects }) => {
  return (
    <div className="pt-6 md:pt-14 px-4 md:px-8">
      {projects?.map((project) => (
        <Link
          key={project._id}
          href={`/post/[slug]`}
          as={`/post/${project.slug.current}`}
          passHref
        >
          <div className="mt-10">
            <ProjectCard
              image={urlFor(project.cover_image).url()}
              name={project.name}
              body={project.body}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsPage;
