/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";
import Hero from "@/app/ui/homepage/hero";
import Tile from "@/app/ui/tile";
import FilterBar from "../ui/filterBar";
import { SkillsType } from "../lib/types";
import { getProjects } from "../lib/getProjects";
import { getWorkPage } from "../lib/getWorkPage";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const workPage = await getWorkPage();

  return {
    title: `And After | ${workPage.metatitle}`,
    description: workPage.metadescription,
  };
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const filter = searchParams.filter;
  const concatTags: SkillsType[] = [];
  // Appel des projets : tous les paramètres sont optionnels
  // 1 - status : rien, Draft, Staging ou Published
  // 2 - preview: preview ou rien pour charger toutes les données
  // 3 - maxRecords : rien ou nombre de projets à afficher
  const projects = await getProjects("Published");
  const workPage = await getWorkPage();
  const rupture = workPage.rupture;
  rupture?.split(" ");
  projects.forEach((project) => concatTags.push(project.tags));
  const allTags = Array.from(new Set(concatTags.flat()));
  console.log(rupture?.length);

  function filteredProjects(skill: string) {
    return projects.filter((p) => p.tags.find((tag) => tag === skill));
  }
  const displayedProjects = filter ? filteredProjects(filter) : projects;

  return (
    <main>
      <Hero title={workPage.title} description={workPage.description} />
      <FilterBar allTags={allTags} filter={filter} />

      <div className="relative grid grid-cols-12 px-6 mt-20 lg:px-20">
        <div className="grid grid-cols-12 col-span-12 col-start-1 gap-6 2xl:col-span-12 2xl:col-start-1 gap-y-16">
          {/* {!filter && (
            <p className={`block row-start-2 col-start-1 col-end-13 xl:col-start-5 xl:col-end-9 2xl:col-start-4 2xl:col-end-7 text-3xl xl:text-[2.9vw] 2xl:text-[1.9vw] leading-tight font-semibold text-nowrap`}>
              {rupture}
            </p>
          )} */}
          {displayedProjects.map(
            ({ title, description, tags, img, slug }, i) =>
              title &&
              description &&
              tags &&
              img &&
              slug && (
                <Tile key={i} title={title} description={description} tags={tags} img={img} slug={slug} />
              )
          )}
        </div>
      </div>
    </main>
  );
}
