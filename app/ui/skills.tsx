"use client";
import { DataPropsType, SkillsType } from "../lib/data";
import { useGrid } from "../lib/gridProvider";
import clsx from "clsx";

export default function Skills({
  skills,
  projects,
}: {
  skills: SkillsType;
  projects: DataPropsType;
}) {
  const { visible } = useGrid();
  const concatTags: SkillsType[] = [];
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = concatTags.flat();
  return (
    <div className="grid grid-cols-12 gap-6 px-6 mt-20 2xl:-mt-96 2xl:mb-96">
      <div className="relative grid col-span-3 gap-1 2xl:col-start-2">
        {skills.map((skill, i) => (
          <div className={clsx("flex items-baseline", {
            "border border-stone-800": visible,
          })} key={i}>
            <h2 className={clsx("text-[12vw] 2xl:text-[8vw] font-semibold leading-[0.8]")}>
              {skill}
            </h2>
            <span className="text-xl italic">
              ({allTags.filter((el) => el === skill).length})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
