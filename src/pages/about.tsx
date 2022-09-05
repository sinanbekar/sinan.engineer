import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { programmingLanguages, technologies, terms } from "../data";

const seo = {
  title: "About",
  description: "Full Stack Developer, read more about me.",
};

const About: NextPage = () => {
  return (
    <>
      <NextSeo {...seo} />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>
        <p>
          I&#39;m a full-stack developer, who is passionate about
          programming and has been programming since childhood. I like technical writing, documentation.
          I&#39;m sharing my open-source works on GitHub. I love photography,
          camping, off-roading, and gaming in my free time.
        </p>
        <p className="mt-2">I&#39;m currently working as a freelancer.</p>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-black dark:text-white md:text-3xl">
            Skills
          </h2>
          <div className="my-4 flex flex-wrap">
            <div className="flex-1">
              <span className="font-semibold dark:text-slate-300">
                Programming Languages
              </span>
              <ul className="my-3 list-inside list-disc space-y-1 text-sm">
                {programmingLanguages.map((language, idx) => (
                  <li key={idx}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <span className="font-semibold dark:text-slate-300">
                Technologies
              </span>
              <ul className="my-3 list-inside list-disc space-y-1 text-sm">
                {technologies.map((tech, idx) => (
                  <li key={idx}>{tech.join(", ")}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <span className="font-semibold dark:text-slate-300">Terms</span>
              <ul className="my-3 list-inside list-disc space-y-1 text-sm">
                {terms.map((term, idx) => (
                  <li key={idx}>{term.join(", ")}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
