"use client"
import Link from "next/link";
import clsx from "clsx";

import { useScrollDirection } from "../hooks/useScrollDirection";

export default function DevCrea({ filter, skills }: any) {
  const dev = filter === "dev" || filter === undefined;
  const crea = filter === "crea";
  const [isVisible, contentRef, filterTop] = useScrollDirection();
  return (
    <div
      className={clsx("sticky top-[88px] lg:top-[120px] z-10 transition-all duration-300 grid grid-cols-12 px-6 mt-20 lg:px-20", {
        "-translate-y-[88px] lg:-translate-y-[120px]  ":
          !isVisible && filterTop < 125,
        "translate-y-0 ": isVisible,
      })}
    >
      <div className="flex justify-end col-span-6 px-6">
        <Link
          className={clsx("cursor-pointer blur transition-all duration-300", {
            "filter-none": dev,
            "hover:filter-none": crea,
          })}
          href={`about?filter=${skills[0]}`}
          scroll={false}
        >
          <h2
            className={clsx(
              "inline-block font-bold text-[20vw] lg:text-[10vw] transition-all duration-300",
              {
                "bg-clip-border": crea,
                "shade-text": dev,
              }
            )}
          >
            {skills[0]}
          </h2>
        </Link>
      </div>
      <div className="flex justify-start col-span-6 px-6">
        <Link
          className={clsx("cursor-pointer blur transition-all duration-300", {
            "filter-none shade-text": crea,
            "hover:filter-none": dev,
          })}
          href={`about?filter=${skills[1]}`}
          scroll={false}
        >
          <h2
            className={clsx(
              "inline-block font-bold text-[20vw] lg:text-[10vw] transition-all duration-300",
              {
                "shade-text": crea,
                "bg-clip-border": dev,
              }
            )}
          >
            {skills[1]}
          </h2>
        </Link>
      </div>
    </div>
  );
}
