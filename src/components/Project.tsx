interface Project {
  title: string;
  excerpt: string;
  sourceLink?: string;
  homepageLink?: string;
}

const Project = ({ title, excerpt, sourceLink, homepageLink }: Project) => {
  return (
    <div className="my-3 justify-between gap-x-8 rounded-lg border border-slate-200 p-6 hover:border-black dark:border-slate-700 dark:hover:border-white md:flex">
      <div className="space-y-2">
        <h3 className="mb-2 font-medium text-slate-700 dark:text-slate-100 md:text-lg">
          {title}
        </h3>
        <p className="max-w-lg text-sm">{excerpt}</p>
      </div>
      <div className="mt-4 flex justify-end gap-x-4 md:m-0">
        {homepageLink ? (
          <a
            href={homepageLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="homepage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="relative inline-flex h-10 w-10 justify-center rounded-lg border border-slate-500 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white sm:w-10"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        ) : null}

        {sourceLink ? (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              fill="none"
              role="img"
              className="relative inline-flex h-10 w-10 justify-center rounded-lg border border-slate-500 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white sm:w-10"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
