import Hero from "@/app/ui/homepage/hero";
import Tile from "@/app/ui/tile";
import { skills, brandImages, getAllProjects, getHomepage } from "./lib/notion";
import Skills from "./ui/homepage/skills";
import Image from "next/image";
import { getProjects, getHomePage } from "./lib/airtable";

export const dynamic="force-dynamic"

export default async function Page() {

  // Appel des projets : tous les paramètres sont optionnels
  // 1 - status : rien, Draft, Staging ou Published
  // 2 - preview: preview ou rien pour charger toutes les données
  // 3 - maxRecords : rien ou nombre de projets à afficher
  const projects = await getProjects("Published");
  // const homePage = await getHomePage();

  console.log("coucou", projects)
  return (
    <main>
      {/* <Hero title={homePage.title} description={homePage.description}  /> */}
      <div className="relative grid grid-cols-12 gap-6 gap-y-16 px-6 lg:px-20 mt-20 2xl:[&>*:nth-child(1)]:col-start-2 2xl:[&>*:nth-child(4)]:col-start-3 2xl:[&>*:nth-child(7)]:col-start-2">
        {projects.map(({ title, tags, img, slug }, i) => (
          <Tile
            key={i}
            title={title}
            tags={tags}
            img={img}
            slug={slug}
            homepage
          />
        ))}
      </div>
      <Skills skills={skills} projects={projects} />
      <div className="relative grid grid-cols-12 gap-6 px-6 mt-20 lg:px-20">
        <p className="col-span-12 col-start-1 font-semibold text-l 2xl:col-span-2 2xl:col-start-2">
          our tools
        </p>
        <div className="grid flex-wrap grid-cols-2 col-span-12 col-start-1 gap-2 lg:gap-6 xl:grid-cols-4 lg:grid-cols-3 2xl:col-span-7 2xl:col-start-4 opacity-40">
          {brandImages.map((image, i) => (
            <div
              className="flex items-center justify-center col-span-1 bg-neutral-800 aspect-square"
              key={i}
            >
              <Image
                src={image.url}
                alt={image.url}
                width={image.width}
                height={image.height}
                className={`${image.mWidth} max-lg:h-auto`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
