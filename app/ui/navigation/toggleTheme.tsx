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
//         "flex relative p-1 w-10 h-6 rounded-full transition-all shade"
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
            <Sun fill="fill-neutral-950" />
          </>
        ) : (
          <>
            <span className="text-sm lg:hidden">Dark mode</span>
            <Moon fill="fill-white " />
          </>
        )}
      </button>
    </>
  );
};

export default ToggleTheme;
