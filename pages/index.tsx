import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";
import Footer from "../components/Footer";
import { sanityClient } from "../lib/sanity.server";
import { useRecoilState } from "recoil";
import { navState } from "../lib/atom";

const Home: NextPage = ({ projects }) => {
  const [showNavbar, setShowNavbar] = useRecoilState(navState);

  const controlNavbar = () => {
    if (window.scrollY > 475) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Wyatt Connolly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <ProjectsPage projects={projects} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);

  return {
    props: {
      projects,
    },
  };
}
export default Home;
