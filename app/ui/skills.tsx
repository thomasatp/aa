"use client";
import { DataPropsType, SkillsList, SkillsType } from "../lib/data";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";



export default function Skills({
  skills,
  projects,
}: {
  skills: SkillsType;
  projects: DataPropsType;
}) {
  const concatTags: SkillsType[] = [];
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = concatTags.flat();

  function filteredProjects(skill: SkillsList | undefined) {
    if (skill === "UX/UI design") {
      return projects.find((p) => p.slug === "ricaud");
    }
    if (skill === "Branding") {
      return projects.find((p) => p.slug === "speakdating");
    }
    if (skill === "Motion") {
      return projects.find((p) => p.slug === "revol");
    }
    if (skill === "Developement") {
      return projects.find((p) => p.slug === "matere");
    }
    return projects.filter((p) => p.tags.find((tag) => tag === skill))[0];
  }


  return (
    <div className="grid grid-cols-12 gap-6 px-6 mb-0 lg:px-20 -mt-96 md:mb-48 lg:mb-96">
      <p className="col-span-12 col-start-1 font-semibold text-l 2xl:col-span-2 2xl:col-start-2 ">
        our expertise
      </p>
      <div className="relative grid col-span-3 gap-1 2xl:col-start-4">
        {skills.map((skill, i) => (
          <div className="relative flex items-baseline group" key={i}>
            <Link href={`/work?filter=${skill}`}>
              <h2 className="relative text-[12vw] 2xl:text-[8vw] translate-0 group-hover:-translate-x-10 max-lg:group-hover:translate-x-0 will-change-auto transition-all duration-300 font-semibold leading-[0.8] z-10">
                {skill}
              </h2>
            </Link>
            <div className="absolute items-center justify-center opacity-0 transition-all duration-300 w-[10vw] will-change-auto max-lg:hidden -translate-y-1/2 translate-x-full p-8 top-1/2 right-0 group-hover:opacity-100 flex bg-stone-900 aspect-4/5">
              <Image
                src={`${filteredProjects(skill)?.img}`}
                alt={projects[0].title}
                fill
                sizes="800"
                className={clsx("w-full object-cover")}
              />
            </div>

            <span className="text-xl italic transition-all duration-300 translate-0 group-hover:-translate-x-10 max-lg:group-hover:translate-x-0 will-change-auto">
              ({allTags.filter((el) => el === skill).length})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
