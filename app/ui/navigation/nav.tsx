"use client"
import Logo from "./logo";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import NavContainer from "./navContainer";
import InnerNav from "./innerNav";
import Baseline from "./baseline";
import { useState } from "react";


export default function Nav({ nav }: { nav: any }) {

  const [navOpen, setNavOpen] = useState(false);
  const [displayCat, setDisplayCat] = useState(false);

  function closeNav() {
    setDisplayCat(false);
    setTimeout(() => {
      setNavOpen(false);
    }, 300);
  }
  
  return (
    <NavContainer>
      <div className="flex justify-between items-center w-full max-w-full">
        <Link
          href="/"
          onClick={closeNav}
          aria-label="Homepage"
          className="flex relative z-40 flex-col"
        >
          <div className="flex gap-2 items-end">
            <Logo className="mb-1 transition-colors duration-300 fill-neutral-950 dark:fill-white size-6 lg:size-8" />
            <p className="text-2xl font-bold lg:text-3xl text-neutral-950 dark:text-white">
              Agence And After
            </p>
          </div>
          <Baseline />
        </Link>

        <InnerNav nav={nav} navOpen={navOpen} setNavOpen={setNavOpen} displayCat={displayCat} setDisplayCat={setDisplayCat} />
      </div>
    </NavContainer>
  );
}
