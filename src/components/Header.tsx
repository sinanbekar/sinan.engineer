/* eslint-disable @next/next/no-img-element */
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
    <li className="border-b border-slate-300 dark:border-slate-700 md:border-none">
      <NextLink href={href}>
        <a
          className={cn(
            isActive
              ? "font-semibold text-slate-800 dark:text-slate-200"
              : "font-normal text-slate-600 dark:text-slate-400",
            "block rounded-lg pb-6 text-sm transition-all hover:bg-slate-200 dark:hover:bg-slate-800 sm:px-3 sm:py-2 md:inline-block md:text-base"
          )}
        >
          {text}
        </a>
      </NextLink>
    </li>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { events: routerEvents } = useRouter();

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  React.useEffect(() => {
    routerEvents.on("routeChangeComplete", closeMenu);
    return function cleanup() {
      routerEvents.off("routeChangeComplete", closeMenu);
    };
  }, [routerEvents]);

  React.useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="relative mx-auto w-full max-w-2xl border-slate-200 pt-8 pb-8 text-slate-900 dark:border-slate-700 dark:text-slate-100 sm:pb-16">
        <div className="w-full md:flex md:flex-row-reverse md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleMenu}
              className="visible -ml-[0.60rem] flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-5 w-5 text-slate-900 dark:text-slate-100"
                  viewBox="0 0 20 20"
                  fill="none"
                  data-hide="false"
                >
                  <path
                    d="M2.5 7.5H17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.5 12.5H17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-slate-900 dark:text-slate-100"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                  data-hide="true"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              )}
            </button>
            <ThemeSwitch />
          </div>

          <ul
            id="navbar-menu"
            className={cn(
              "absolute z-50 mt-8 min-h-screen w-full flex-col space-y-6 bg-slate-50 p-2 opacity-100 transition-[opacity,visibility] duration-300 dark:bg-slate-900 md:static md:m-0 md:-ml-[0.60rem] md:flex md:h-auto md:min-h-0 md:flex-row md:space-y-0 md:bg-transparent md:p-0 md:opacity-100 md:transition-none",
              isMenuOpen
                ? "visible opacity-100"
                : "invisible opacity-0 md:visible md:opacity-100"
            )}
          >
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
            <NavItem href="/blog" text="Blog" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
