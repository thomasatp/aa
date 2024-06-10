// "use client";

// import { useState, useLayoutEffect } from "react";
// import { useTheme } from "next-themes";
// import clsx from "clsx";

// export default function ToggleTheme() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   function handleTheme() {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   }

//   useLayoutEffect(() => {
//     setMounted(true);
//   }, [theme]);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <button
//       onClick={handleTheme}
//       aria-label="Change Theme"
//       className={clsx(
//         "relative transition-all flex w-10 h-6 p-1 rounded-full shade"
//       )}
//     >
//       <span
//         className={clsx(
//           "absolute transition-all w-5 h-5 inset-0.5 rounded-full",
//           {
//             "bg-neutral-950 translate-x-4": theme === "dark",
//             "bg-white": theme === "light",
//           }
//         )}
//       ></span>
//     </button>
//   );
// }
"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Moon from "./moon";
import Sun from "./sun";

const ToggleTheme = () => {
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
      <button
        className="relative flex items-center justify-between max-lg:w-full right-O rounded-full bg-none outline-none focus:bg-none focus:outline-none lg:px-1 lg:py-1 gap-2 text-sm"
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <>
            <span className="text-sm lg:hidden">Light mode</span>
            <Sun fill="fill-stone-950" />
          </>
        ) : (
          <>
            <span className="text-sm lg:hidden">Dark mode</span>
            <Moon fill="fill-white " />
          </>
        )}
        {/* <span className="absolute inset-y-px left-px dark:right-px dark:left-1/2 transition-all w-1/2 bg-stone-500 rounded-full"></span>
        <span className="z-10 flex">Light</span>
        <span className="z-10 flex">Dark</span> */}
      </button>
    </>
  );
};

export default ToggleTheme;