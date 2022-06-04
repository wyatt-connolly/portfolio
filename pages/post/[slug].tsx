import { useRouter } from "next/router";
import { sanityClient } from "../../lib/sanity.server";
import Navbar from "../../components/Navbar";
import { PortableText } from "@portabletext/react";

const Post = ({ project }) => {
  console.log(project);

  return (
    <article className="bg-[#18181B]">
      <h1 className="text-[#A1A1B5]">{project?.slug?.current}</h1>
      <h2 className="text-[#A1A1B5]">{project?.publishedAt}</h2>
    </article>
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
