import { useRouter } from "next/router";
import { sanityClient } from "../../lib/sanity.server";
import { PortableText } from "@portabletext/react";

const serializers = {
  types: {
    break: ({ project }) => {
      const { style } = project.node;
      if (style === "lineBreak") {
        return <hr className="mt-10" />;
      }
      return null;
    },
  },
};

const Post = ({ project }) => {
  return (
    <div className="bg-[#18181B]">
      <article className="container mx-auto max-w-2xl px-4 md:px-8 pt-48 md:pt-48 text-[#A1A1B5]">
        <h1 className="font-medium text-2xl mb-2 ">{project?.name}</h1>
        <h2 className="text-[#A1A1B5]/40 text-lg mb-8 ">
          {project?.publishedAt}
        </h2>
        <div className="text-lg">
          <PortableText value={project?.lessons} />
          <PortableText value={project?.techstack} />
        </div>
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await sanityClient.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      project,
    },
  };
}

export default Post;
