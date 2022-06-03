import React from "react";
import ProjectCard from "./ProjectCard";
import { urlFor } from "../lib/sanity";

function ProjectsPage({ title, description, projects }) {
  return (
    <div className="flex container flex-col items-center mx-auto max-w-2xl px-4 md:px-8 mt-12 md:mt-24 space-y-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={urlFor(project.image).url()}
          title={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectsPage;
