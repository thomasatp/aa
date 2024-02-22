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
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleTheme}
      aria-label="Change Theme"
      className={clsx(
        "relative transition-all flex w-10 h-6 p-1 rounded-full shade"
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
