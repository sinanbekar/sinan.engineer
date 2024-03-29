import Link from "next/link";

const Footer = () => (
  <footer className="mx-auto mt-auto mb-2 flex w-full max-w-2xl flex-col items-center justify-center">
    <hr className="border-1 mb-4 w-full border-slate-200 dark:border-slate-800" />
    <div className="mb-3 flex space-x-2 text-sm text-slate-500 dark:text-slate-400">
      <Link href="/">Home</Link>
      <span>•</span>
      <Link href="/about">About</Link>
      <span>•</span>
      <Link href="/projects">Projects</Link>
      <span>•</span>
      <Link href="/blog">Blog</Link>
    </div>
    <span className="m-3 mt-0 text-center text-sm text-slate-500 dark:text-slate-400">
      © Copyright 2022 Sinan Bekar. All rights reserved.
    </span>
  </footer>
);

export default Footer;
