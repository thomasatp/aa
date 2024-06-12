"use client";
import Link from "next/link";
import clsx from "clsx";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function FilterBar({ allTags, filter }: any) {
  const [isVisible, contentRef, filterTop] = useScrollDirection();

  return (
    <div
      ref={contentRef}
      className={clsx(
        "sticky  z-10 flex justify-start gap-1 px-6 py-3 transition-all duration-300 overflow-scroll bg-white snap-x snap-mandatory scroll-px-6 tags lg:justify-center flex-nowrap lg:flex-wrap dark:bg-neutral-950 ",
        {
          "top-0 lg:top-0":
            !isVisible && filterTop < 209,
          "top-[88px] lg:top-52": isVisible,
        }
      )}
    >
      <Link
        href={`/projets`}
        scroll={false}
        className={clsx(
          "px-4 snap-start flex flex-none py-2 text-sm border transition-all will-change-auto duration-300 rounded-full cursor-pointer border-neutral-800 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400",
          {
            "bg-neutral-800 text-white dark:bg-neutral-400 dark:text-neutral-950":
              !filter,
            "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400":
              filter,
          }
        )}
      >
        All
      </Link>
      {allTags.map((skill: any, index: any) => (
        <Link
          key={index}
          href={`/projets?filter=${skill}`}
          scroll={false}
          className={clsx(
            "px-4 snap-start flex flex-none py-2 text-sm border transition-all will-change-auto duration-300 rounded-full cursor-pointer border-neutral-800  dark:border-neutral-400 ",
            {
              "bg-neutral-800 text-white dark:bg-neutral-400 dark:text-neutral-950":
                filter === skill,
              "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400":
                filter !== skill,
            }
          )}
        >
          {skill}
        </Link>
      ))}
    </div>
  );
}
