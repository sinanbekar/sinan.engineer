import type { NextPage } from "next";
import Link from "next/link";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProjects from "../components/FeaturedProjects";
import {
  contactEmail,
  githubProfileUrl,
  githubUsername,
  interestedTechs,
  linkedinProfileUrl,
  linkedinUsername,
  mediumProfileUrl,
  mediumUsername,
  twitterUsername,
} from "../data";

const Home: NextPage = () => {
  return (
    <>
      <section className="pb-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center">
          <h1
            className="mb-1 bg-slate-800 bg-clip-text fill-transparent text-[2.4rem] font-bold leading-none tracking-tight text-transparent 
          dark:animate-shine  dark:bg-gradient-to-l dark:from-sky-800 dark:to-sky-400 md:text-6xl"
          >
            Sinan Bekar
          </h1>
          <h2 className="mb-1 text-lg tracking-tight text-slate-600 dark:text-slate-300">
            Full Stack Developer
          </h2>
          <div className="mt-4 flex flex-row justify-center gap-x-4">
            <a
              title={contactEmail}
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${contactEmail}`}
            >
              <span className="sr-only">mail</span>
              <svg
                viewBox="0 0 512 512"
                className="h-6 w-6 fill-current text-slate-700 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </a>
            <a
              title={githubUsername}
              target="_blank"
              rel="noopener noreferrer"
              href={githubProfileUrl}
            >
              <span className="sr-only">github</span>
              <svg
                viewBox="0 0 496 512"
                className="h-6 w-6 fill-current text-slate-700 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              title={`@${twitterUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/sinanbekarr"
            >
              <span className="sr-only">twitter</span>
              <svg
                viewBox="0 0 512 512"
                className="h-6 w-6 fill-current text-slate-700 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              title={linkedinUsername}
              target="_blank"
              rel="noopener noreferrer"
              href={linkedinProfileUrl}
            >
              <span className="sr-only">linkedin</span>
              <svg
                viewBox="0 0 496 512"
                className="h-6 w-6 fill-current text-slate-700 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a
              title={`@${mediumUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              href={mediumProfileUrl}
            >
              <span className="sr-only">medium</span>
              <svg
                viewBox="0 0 512 512"
                className="h-6 w-6 fill-current text-slate-700 hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-6 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
            Short Intro
          </h3>
          <div>
            <p>
              Hi! I&#39;m a self-taught full-stack developer who enjoys building
              things and solving problems. I have been programming since I was
              10.
            </p>
            <p className="mt-2">
              I&#39;m currently working as a freelancer. Please don&#39;t
              hesitate to reach out.
            </p>
            <p className="mt-4">
              Here are a few technologies that I am currently interested in and
              working on.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interestedTechs.map((tag, idx) => (
                <li
                  key={idx}
                  className="rounded bg-slate-200 px-2.5 py-0.5 text-sm text-slate-500 transition-all hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-500"
                >
                  <span className="pointer-events-none">{tag}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Link href="/about">
                <a className="flex h-6 items-center rounded-lg leading-7 text-slate-600 transition-all hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
                  Read more about me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="ml-1 h-6 w-6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
            Featured Projects
          </h3>
          <div className="pt-6">
            <FeaturedProjects />
          </div>
          <Link href="/projects">
            <a className="flex h-6 items-center rounded-lg leading-7 text-slate-600 transition-all hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
              See more projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
            Featured Posts
          </h3>
          <div className="pt-6">
            <FeaturedPosts />
          </div>
          <Link href="/blog">
            <a className="flex h-6 items-center rounded-lg leading-7 text-slate-600 transition-all hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
