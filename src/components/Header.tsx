import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import cn from "classnames";

type NavItemProps = { href: string; text: string };

const NavItem = ({ href, text }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-slate-800 dark:text-slate-200"
            : "font-normal text-slate-600 dark:text-slate-400",
          "hidden rounded-lg p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

// TODO: Mobile Menu

const Header = () => {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between border-slate-200 pt-8 pb-8 text-slate-900 dark:border-slate-700 dark:text-slate-100 sm:pb-16">
        <div className="ml-[-0.60rem]">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/blog" text="Blog" />
        </div>
        <ThemeSwitch />
      </nav>
    </div>
  );
};

export default Header;
