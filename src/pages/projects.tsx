import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Project from "../components/Project";
import { projects } from "../data";

const seo = {
  title: "Projects",
  description: "My mostly open-source personal projects",
};

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Projects
        </h1>
        <p className="mb-8">My mostly open-source personal projects</p>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx}>
              <Project {...project} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
