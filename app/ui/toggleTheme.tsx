"use client";

import { useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function ToggleTheme() {
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
    <button
      onClick={handleTheme}
      className={clsx(
        "relative transition-all flex w-10 h-6 p-1 rounded-full bg-gradient-to-tr from-slate-800 via-rose-600 to-cyan-400"
      )}
    >
      <span
        className={clsx(
          "absolute transition-all w-5 h-5 inset-0.5 rounded-full",
          {
            "bg-neutral-950 translate-x-4": theme === "dark",
            "bg-white": theme === "light",
          }
        )}
      ></span>
    </button>
  );
}
