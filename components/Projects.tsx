import React from "react";
import ProjectCard from "./ProjectCard";

function Projects({ title, description, image }) {
  return (
    <div className="flex container flex-col items-center mx-auto max-w-2xl px-4 md:px-8 mt-12 md:mt-24 space-y-10">
      <ProjectCard
        title="Twitter Clone"
        image="https://user-images.githubusercontent.com/88942814/167864022-5f7f4ad7-b7cc-43da-82ab-21015728f67d.png"
        description={
          <ul>
            <li>
              Developed a web app that is similar to Twitter using Next, Recoil,
              Tailwind CSS, and Firebase.
            </li>
          </ul>
        }
      />
      <ProjectCard
        title="Nike eCommerce"
        image="https://user-images.githubusercontent.com/88942814/163517949-625727f8-dfe8-4942-87ea-28b830ab9eb7.png"
        description={
          <ul>
            <li>
              Developed an eCommerce store that allows users to sign
              in/register, add products to their cart, and checkout using
              PayPal’s SDK.
            </li>
          </ul>
        }
      />
      <ProjectCard
        title="Pokedex"
        image="https://user-images.githubusercontent.com/88942814/163649348-a130903e-e86a-4cb4-9062-d5f0e30e58ac.png"
        description={
          <ul>
            <li>
              Developed a web app that implements server-side rendering and
              static site generation to reduce load times, then maps out that
              data in a grid-like fashion.
            </li>
          </ul>
        }
      />
      <ProjectCard
        title="Medium Clone"
        image="https://user-images.githubusercontent.com/88942814/169425214-b4f0aa01-8f51-4aae-a86b-c145bdac4388.png"
        description={
          <ul>
            <li>
              Created a blog site that allows the editor to create posts on the
              backend using Sanity.
            </li>
          </ul>
        }
      />
    </div>
  );
}

export default Projects;
