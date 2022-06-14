import { useRouter } from "next/router";
import { sanityClient } from "../../lib/sanity.server";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { useEffect } from "react";
import Head from "next/head";
import { navState } from "../../lib/atom";
import { useRecoilState } from "recoil";
import Navbar from "../../components/Navbar";
import type { NextPage } from "next";
import { Project } from "../../interfaces";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";

interface Props {
  project?: Project;
}

const Post = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showNavbar, setShowNavbar] = useRecoilState(navState);

  useEffect(() => {
    setShowNavbar(true);
  }, [setShowNavbar]);

  useEffect(() => {
    return () => {
      setShowNavbar(false);
    };
  }, [setShowNavbar]);

  return (
    <>
      <Head>
        <title>{project?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="container mx-auto max-w-2xl px-4 md:px-8 pt-48 md:pt-48 text-[#A1A1B5]">
        <h1 className="font-medium text-4xl pb-2 ">{project?.name}</h1>
        <h2 className="text-[#A1A1B5]/40 text-lg pb-8 ">
          {project?.publishedAt}
        </h2>
        <div className="text-lg space-y-6 pb-5">
          <PortableText<any>
            value={project?.summary}
            components={{
              block: {
                // Ex. 1: customizing common block types
                h1: ({ children }) => (
                  <h1 className="text-2xl font-medium">{children}</h1>
                ),
              },
              listItem: {
                // Ex. 1: customizing common list types
                bullet: ({ children }) => (
                  <li className="ml-10 list-disc">{children}</li>
                ),
              },
            }}
          />
        </div>
        <figure>
          {project?.image_gallery.images.map((image: any) => (
            <>
              <img
                className="pt-6"
                src={urlFor(image).url()}
                alt="Project Gallery"
              />
              <figcaption className="text-sm italic text-gray-500 leading-7 pt-2 pb-5">
                {image.alt}
              </figcaption>
            </>
          ))}
        </figure>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" }: any = context.params;
  const project: Project[] = await sanityClient.fetch(
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
};

export default Post;
