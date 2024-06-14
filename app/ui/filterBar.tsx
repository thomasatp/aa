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
        "sticky  z-10 flex justify-start gap-1 px-6 py-3 transition-all duration-300 overflow-scroll snap-x snap-mandatory scroll-px-6 tags lg:justify-center flex-nowrap lg:flex-wrap",
        // {
        //   "top-0 lg:top-0":
        //     !isVisible && filterTop < 209,
        //   "top-[88px] lg:top-52": isVisible,
        // }
      )}
    >
      <Link
        href={`/projets`}
        scroll={false}
        className={clsx(
          "flex flex-none px-4 py-2 text-base font-medium rounded-full border transition-all duration-300 cursor-pointer snap-start will-change-auto text-neutral-600",
          {
            "text-white bg-coral border-coral":
              !filter,
            "bg-bkg dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800":
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
            "px-4 snap-start flex flex-none py-2 text-base font-medium border transition-all will-change-auto duration-300 rounded-full cursor-pointer",
            {
              "bg-coral border-coral text-white":
                filter === skill,
              "bg-bkg dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800":
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
