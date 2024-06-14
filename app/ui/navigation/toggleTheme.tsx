"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Moon from "./moon";
import Sun from "./sun";

const ToggleTheme = ({ className }: { className: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className={className} onClick={handleTheme}>
        {theme === "light" ? (
          <>
            <span className="text-sm lg:hidden">Light mode</span>
            <Sun fill="fill-neutral-950 transition-color duration-300" />
          </>
        ) : (
          <>
            <span className="text-sm lg:hidden">Dark mode</span>
            <Moon fill="fill-white transition-color duration-300" />
          </>
        )}
      </button>
    </>
  );
};

export default ToggleTheme;
