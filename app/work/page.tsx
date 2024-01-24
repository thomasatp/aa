/* eslint-disable react/no-unescaped-entities */
"use client";
import Hero from "@/app/ui/hero";
import Tile from "@/app/ui/tile";
import { projects, SkillsType } from "../lib/data";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Page() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [isVisible, contentRef, filterTop] = useScrollDirection();

  const concatTags: SkillsType[] = [];
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = Array.from(new Set(concatTags.flat()));

  function filteredProjects(skill: string) {
    return projects.filter((p) => p.tags.find((tag) => tag === skill));
  }
  const displayedProjects = filter ? filteredProjects(filter) : projects;

  return (
    <main>
      <Hero
        title="work"
        description=" Non enim tempor posuere senectus. Sapien gravida ullamcorper sit accumsan rhoncus fermentum. At nisl euismod fringilla enim. A et sed est sed venenatis a in velit ut. Urna adipiscing nunc aenean donec pharetra volutpat adipiscing non."
      />
      <div
        ref={contentRef}
        className={clsx(
          "sticky top-[88px] lg:top-[120px] z-10 flex justify-start gap-1 px-6 py-3 transition-all duration-300 overflow-scroll bg-white snap-x snap-mandatory scroll-px-6 tags lg:justify-center flex-nowrap lg:flex-wrap dark:bg-neutral-950 ",
          {
            "-translate-y-[88px] lg:-translate-y-[120px]  ": !isVisible && filterTop < 121,
            "translate-y-0 ": isVisible ,
          }
        )}
      >
        <Link
          href={`/work`}
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
        {allTags.map((skill, index) => (
          <Link
            key={index}
            href={`/work?filter=${skill}`}
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
      <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
        <div className="grid grid-cols-12 col-span-12 col-start-1 gap-6 2xl:col-span-10 2xl:col-start-2 gap-y-16">
          {!filter && (
            <p className="block row-start-2 col-start-1 col-end-13 xl:col-start-5 xl:col-end-9 2xl:col-start-4 2xl:col-end-7 text-3xl 2xl:text-[1.9vw] xl:text-[2.9vw] leading-tight font-semibold text-nowrap ">
              Un long chemin parcouru nous permettant aujourd'hui d'avoir une
              vision large sur les{" "}
              <span className="inline-block text-transparent bg-gradient-to-br from-slate-800 via-rose-600 to-cyan-400 bg-clip-text">
                enjeux digitaux
              </span>
              , ses problématiques mais surtout sur ses{" "}
              <span className="inline-block text-transparent bg-gradient-to-br from-slate-800 via-rose-600 to-cyan-400 bg-clip-text">
                solutions
              </span>
              .
            </p>
          )}
          {displayedProjects.map(({ title, tags, img, slug }, i) => (
            <Tile key={i} title={title} tags={tags} img={img} slug={slug} />
          ))}
        </div>
      </div>
    </main>
  );
}
