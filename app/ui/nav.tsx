"use client"

import Logo from "./logo";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";


export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 grid w-full grid-cols-3 gap-6 px-6 py-12 lg:px-20">
      <Link href="/" 
      className="col-span-1">
        <Logo />
      </Link>
      <div className="flex justify-center col-span-1 gap-4 text-md font-semibold">
        <Link href="/work">
          <p>work</p>
        </Link>
        <p>about</p>
        <p>contact</p>
      </div>
      <div className="flex justify-end col-span-1 gap-4 cursor-pointer" onClick={handleTheme}>
        <p className="text-sm font-semibold" onClick={handleTheme}>{"</>"}</p>
      </div>
    </div>
  );
}

