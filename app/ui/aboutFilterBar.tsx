"use client";
import Link from "next/link";
import clsx from "clsx";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function AboutFilterBar({ skills, filter }: any) {
  const dev = filter === "dev" || filter === undefined;
  const crea = filter === "crea";
  const [isVisible, contentRef, filterTop] = useScrollDirection();
  return (
    <div
      ref={contentRef}
      className={clsx(
        "sticky top-[88px] lg:top-[120px] z-10 flex justify-center gap-1 px-6 py-3 transition-all duration-300 overflow-scroll bg-white snap-x snap-mandatory scroll-px-6 tags flex-nowrap lg:flex-wrap dark:bg-neutral-950 ",
        {
          "-translate-y-[88px] lg:-translate-y-[120px]  ":
            !isVisible && filterTop < 121,
          "translate-y-0 ": isVisible,
        }
      )}
    >
      <Link
        href={`/about?filter=${skills[0]}`}
        scroll={false}
        className={clsx(
          "px-4 snap-start flex flex-none py-2 text-sm border rounded-full cursor-pointer border-neutral-800 dark:border-neutral-400 ",
          {
            "bg-neutral-800 dark:bg-neutral-400 text-white dark:text-neutral-950":
              dev,
            "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400":
              crea,
          }
        )}
      >
        {skills[0]}
      </Link>
      <Link
        href={`/about?filter=${skills[1]}`}
        scroll={false}
        className={clsx(
          "px-4 snap-start flex flex-none py-2 text-sm border rounded-full cursor-pointer border-neutral-800 dark:border-neutral-400 ",
          {
            "bg-neutral-800 dark:bg-neutral-400 text-white dark:text-neutral-950":
              crea,
            "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400":
              dev,
          }
        )}
      >
        {skills[1]}
      </Link>
    </div>
  );
}
