import React from "react";
import ProjectCard from "./ProjectCard";
import { urlFor } from "../lib/sanity";
import Link from "next/link";

function ProjectsPage({ title, body, projects }) {
  return (
    <div className="flex container flex-col items-center mx-auto max-w-2xl px-4 md:px-8 mt-12 md:mt-24 space-y-10">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/post/[slug]`}
          as={`/post/${project.slug.current}`}
        >
          <ProjectCard
            image={urlFor(project.image).url()}
            title={project.name}
            body={project.body}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProjectsPage;
