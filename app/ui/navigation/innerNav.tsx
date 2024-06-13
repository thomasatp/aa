"use client";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function InnerNav({ nav }: { nav: any }) {
  const [navOpen, setNavOpen] = useState(false);
  const [displayCat, setDisplayCat] = useState(false);

  function toogleNav() {
    setNavOpen((nav) => !nav);
  }

  function openNav() {
    setNavOpen(true);
    setTimeout(() => {
      setDisplayCat(true);
    }, 700);
  }

  function closeNav() {
    setDisplayCat(false);
    setTimeout(() => {
      setNavOpen(false);
    }, 700);
  }

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [navOpen]);

  return (
    <>
      <div
        onClick={navOpen ? closeNav : openNav}
        className="flex relative z-40 flex-col gap-2 justify-center items-center size-10 lg:hidden"
      >
        <span
          className={clsx(
            "absolute top-1/2 w-6 h-px transition-all duration-300 translate-y-1 bg-neutral-950 dark-bg-white",
            {
              "left-2": !displayCat,
              "left-0": displayCat,
            }
          )}
        />
        <span
          className={clsx(
            "absolute left-2 top-1/2 w-6 h-px transition-all duration-300 -translate-y-1 bg-neutral-950 dark-bg-white",
            {
              "left-2": !displayCat,
              "left-4": displayCat,
            }
          )}
        />
      </div>
      <div
        className={clsx(
          "flex gap-3 items-center text-base font-semibold transition-all duration-300 max-lg:items-start max-lg:pt-64 max-lg:fixed lg:gap-4 max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:bottom-0 max-lg:right-0 max-lg:px-6 max-lg:z:30 max-lg:flex-col max-lg:w-full max-lg:h-lvh max-lg:bg-white max-lg:dark:bg-neutral-950",
          {
            "translate-y-0": navOpen,
            "-translate-y-full": !navOpen,
          }
        )}
      >
        <Link
          onClick={closeNav}
          className={clsx(
            "px-2 py-2 transition-transform duration-700 delay-600 max-lg:px-0 max-lg:py-1 max-lg:w-full max-lg:text-3xl",
            {
              "opacity-0 translate-y-1": !displayCat,
              "opacity-100 translate-y-0": displayCat,
            }
          )}
          href={`/${nav[0].url}`}
        >
          {nav[0].category}
        </Link>
        <Link
          onClick={closeNav}
          className={clsx(
            "px-2 py-2 transition-transform duration-700 delay-650 max-lg:px-0 max-lg:py-1 max-lg:w-full max-lg:text-3xl",
            {
              "opacity-0 translate-y-1": !displayCat,
              "opacity-100 translate-y-0": displayCat,
            }
          )}
          href={`/${nav[1].url}`}
        >
          {nav[1].category}
        </Link>
        <a
          onClick={closeNav}
          className={clsx(
            "px-2 py-2 transition-transform duration-700 delay-700 max-lg:px-0 max-lg:py-1 max-lg:w-full max-lg:text-3xl",
            {
              "opacity-0 translate-y-1": !displayCat,
              "opacity-100 translate-y-0": displayCat,
            }
          )}
          href={`mailto:${nav[2].url}`}
        >
          {nav[2].category}
        </a>
        <ToggleTheme
          className={clsx(
            "flex relative gap-2 justify-between items-center text-sm bg-none rounded-full transition-transform duration-700 outline-none delay-750 max-lg:mt-32 right-O focus:bg-none focus:outline-none lg:px-1 lg:py-1",
            {
              "opacity-0 translate-y-1": !displayCat,
              "opacity-100 translate-y-0": displayCat,
            }
          )}
        />
      </div>
    </>
  );
}
