"use client";
import Hero from "@/app/ui/hero";
import Nav from "@/app/ui/nav";
import Tile from "@/app/ui/tile";
import Grid from "@/app/ui/grid";
import { projects, SkillsList, SkillsType } from "./../lib/data";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
export default function Page() {
  const concatTags: SkillsType[] = [];
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = Array.from(new Set(concatTags.flat()));

  const [filter, setFilter] = useState<SkillsList | "all">("all");

  const filteredProjects = projects.filter((p) =>
    p.tags.find((tag) => tag === filter)

    
  );
  


  const displayedProjects = filter === "all" ? projects : filteredProjects;

  console.log(filter);
  return (
    <main>
      <Nav />
      <Grid />
      <Hero
        title="work"
        description=" Non enim tempor posuere senectus. Sapien gravida ullamcorper sit accumsan rhoncus fermentum. At nisl euismod fringilla enim. A et sed est sed venenatis a in velit ut. Urna adipiscing nunc aenean donec pharetra volutpat adipiscing non."
      />
      <div className="flex flex-wrap justify-center gap-1 mt-3">
        <p className={clsx("px-3 py-1 text-sm border rounded-full cursor-pointer border-neutral-700 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400", {
                "bg-neutral-700 text-white dark:bg-neutral-400 dark:text-neutral-950": filter === "all"
            })} onClick={() => setFilter('all')}>
          All
        </p>
        {allTags.map((tag, index) => (  
          <button
            className={clsx("px-3 py-1 text-sm border rounded-full cursor-pointer border-neutral-700 text-neutral-600 dark:border-neutral-400 dark:text-neutral-400", {
                "bg-neutral-700 text-white dark:bg-neutral-400 dark:text-neutral-950": filter === tag   
            })}
            key={index}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
        <div className="grid grid-cols-12 col-span-12 col-start-1 gap-6 2xl:col-span-10 2xl:col-start-2 gap-y-16">
            <p className="col-span-3 col-start-7 row-start-2 text-5xl font-semibold">{"Quand on s’endort avec le cul qui gratte, on se réveille avec les doigts qui puent"}</p>
          {displayedProjects.map(({ title, tags, img, slug }, i) => (
            <Tile key={i} title={title} tags={tags} img={img} slug={slug} />
          ))}
        </div>
      </div>
    </main>
  );
}
