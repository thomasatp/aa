/* eslint-disable react/no-unescaped-entities */

import Hero from "@/app/ui/homepage/hero";
import Tile from "@/app/ui/tile";
import { getAllProjects, SkillsType } from "../lib/notion";
import FilterBar from "../ui/filterBar";

export default async function Page({searchParams}: {searchParams: any}) {
  
  const filter = searchParams.filter;
  const concatTags: SkillsType[] = [];
  const projects = await getAllProjects("Published")
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
      <FilterBar allTags={allTags} filter={filter}/>
      
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
