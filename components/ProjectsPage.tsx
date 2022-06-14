import React from "react";
import ProjectCard from "./ProjectCard";
import { urlFor } from "../lib/sanity";
import { Project } from "../interfaces";

interface Props {
  projects?: Project[];
}

const ProjectsPage = ({ projects }: Props) => {
  return (
    <div className="pt-6 md:pt-14 px-4 md:px-8">
      {projects?.map(
        ({ name, body, _id, slug, demoUrl, githubUrl, cover_image }) => (
          <div className="mt-10" key={_id}>
            <ProjectCard
              image={urlFor(cover_image).url()}
              name={name}
              body={body}
              githubUrl={githubUrl}
              demoUrl={demoUrl}
              slug={slug}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsPage;
