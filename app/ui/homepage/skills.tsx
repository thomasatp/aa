"use client";
import { DataPropsType, SkillsList, SkillsType } from "../../lib/types";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Media from "../project/media";
import { useState, useEffect } from "react";
import { useMouseMove } from "@/app/hooks/useMouseMove";

export default function Skills({ projects }: { projects: DataPropsType }) {
  const concatTags: SkillsType[] = [];
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = concatTags.flat();
  const skills = Array.from(new Set(concatTags.flat()));

  function filteredProjects(skill: SkillsList) {
    if (skill === "UX/UI Design") {
      return (
        projects.find((p) => p.slug === "ricaud")?.img ||
        projects.filter((p) => p.tags.find((tag) => tag === "UX/UI Design"))[0]
          ?.img
      );
    }
    if (skill === "Branding") {
      return (
        projects.find((p) => p.slug === "speakdating")?.img ||
        projects.filter((p) => p.tags.find((tag) => tag === "Branding"))[0]?.img
      );
    }
    if (skill === "Motion Design") {
      return (
        projects.find((p) => p.slug === "revol")?.img ||
        projects.filter((p) => p.tags.find((tag) => tag === "Motion Design"))[0]?.img
      );
    }
    if (skill === "Développement") {
      return (
        projects.find((p) => p.slug === "matere")?.img ||
        projects.filter((p) => p.tags.find((tag) => tag === "Development"))[0]
          ?.img
      );
    }
    return projects.filter((p) => p.tags.find((tag) => tag === skill))[0]?.img;
  }

  const {position} = useMouseMove()



  return (
    <div className="grid grid-cols-12 gap-6 px-6 my-24 mb-0 lg:px-20 xl:my-64">
      <div className="grid relative col-span-12 col-start-1 gap-6 2xl:col-start-3 2xl:col-span-8">
        {skills.map(
          (skill, i) =>
            filteredProjects(skill) !== undefined && (
              <div
                className="flex relative items-baseline w-full group"
                key={i}
              >
                <Link href={`/projets?filter=${skill}`}>
                  <h2 className=" whitespace-nowrap text-white mix-blend-difference relative text-[10vw] 2xl:text-[7vw] translate-0 group-hover:-translate-x-10 max-lg:group-hover:translate-x-0 will-change-auto transition-all duration-300 font-bold leading-[0.8] group-hover:z-20">
                    {skill}
                  </h2>
                </Link>
                <motion.div style={{left: -position.x/6, top: -position.y/3}} className="absolute rounded-3xl overflow-hidden items-center justify-center opacity-0 transition-[scale] w-[20vw] will-change-auto max-lg:hidden group-hover:opacity-100 flex aspect-4/5 scale-0 group-hover:scale-100 group-hover:z-10">
                  {skill && (
                    <Media
                      type={filteredProjects(skill).type}
                      url={filteredProjects(skill).url}
                      name={filteredProjects(skill).name}
                      cover
                    />
                  )}
                </motion.div>

                <span className="text-xl italic transition-all duration-300 translate-0 group-hover:-translate-x-10 max-lg:group-hover:translate-x-0 will-change-auto">
                  ({allTags.filter((el) => el === skill).length})
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
}
