type ExternalContentItemProps = {
  title: string;
  link: string;
  source?: string;
  excerpt: string;
};

const ExternalContentItem = ({
  title,
  link,
  excerpt,
  source,
}: ExternalContentItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group mb-6 block w-full"
      rel="noopener noreferrer"
    >
      <div className="flex gap-x-2">
        <h4 className="mb-2 font-medium text-slate-700 transition-all group-hover:text-black dark:text-slate-100 dark:group-hover:text-slate-300 md:text-lg">
          {title}
        </h4>
        <svg
          className="mt-1.5 h-4 w-4 fill-current group-hover:text-black dark:group-hover:text-slate-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -256 1850 1850"
        >
          <path
            d="M1408 608V288q0-119-84.5-203.5T1120 0H288Q169 0 84.5 84.5T0 288v832q0 119 84.5 203.5T288 1408h704q14 0 23-9t9-23v-64q0-14-9-23t-23-9H288q-66 0-113-47t-47-113V288q0-66 47-113t113-47h832q66 0 113 47t47 113v320q0 14 9 23t23 9h64q14 0 23-9t9-23zm384 864V960q0-26-19-45t-45-19q-26 0-45 19l-176 176-652-652q-10-10-23-10t-23 10L695 553q-10 10-10 23t10 23l652 652-176 176q-19 19-19 45t19 45q19 19 45 19h512q26 0 45-19t19-45z"
            transform="matrix(1 0 0 -1 30.373 1426.95)"
          />
        </svg>
        {source ? (
          <span className="mt-1 text-sm group-hover:text-black dark:group-hover:text-slate-300">
            {source}
          </span>
        ) : null}
      </div>
      <p className="text-sm transition-all group-hover:text-slate-700 dark:group-hover:text-slate-400">
        {excerpt}
      </p>
    </a>
  );
};

export default ExternalContentItem;
