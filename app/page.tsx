import { Metadata } from "next";
import Hero from "@/app/ui/homepage/hero";
import Tile from "@/app/ui/tile";
import { brandImages } from "./lib/notion";
import Skills from "./ui/homepage/skills";
import Image from "next/image";
import { getHomePage } from "./lib/getHomePage";
import { getProjects } from "./lib/getProjects";
import { getAllProjects } from "./lib/notion/getProjects";
import MovingText from "./ui/project/movingText";
import Media from "./ui/project/media";
import HomeHero from "./ui/homepage/homeHero";
import Slider from "./ui/homepage/slider";
import SliderDrag from "./ui/homepage/sliderDrag";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getHomePage();

  return {
    title: `And After | ${homePage.metatitle}`,
    description: homePage.metadescription,
  };
}

export default async function Page() {
  // Appel des projets : tous les paramètres sont optionnels
  // 1 - status : rien, Draft, Staging ou Published
  // 2 - preview: preview ou rien pour charger toutes les données
  // 3 - maxRecords : rien ou nombre de projets à afficher
  const projects = await getProjects("Published", "preview", 9);
  const homePage = await getHomePage();
  const base = await getAllProjects("Published");
  console.log(base[6]);

  return (
    <main className="relative">
      {/* <Hero title={homePage.title} description={homePage.description} /> */}
      <HomeHero />
      <div className="grid relative grid-cols-12 gap-6 gap-y-16 px-6 my-24 lg:px-80 xl:my-48">
        <h1 style={{fontSize: "clamp(1.5rem, 2.5vw, 4.5rem)"}} className="col-start-1 col-span-12 leading-[1.3]">
          {homePage.description}
        </h1>
      </div>
      <Slider projects={projects} />
      <Skills projects={projects} />
      <div className="grid relative grid-cols-12 gap-6 px-6 mt-20 lg:px-20">
        <p className="col-span-12 col-start-1 font-semibold text-l 2xl:col-span-2 2xl:col-start-2">
          our tools
        </p>
        <div className="grid flex-wrap grid-cols-2 col-span-12 col-start-1 gap-2 opacity-40 lg:gap-6 xl:grid-cols-4 lg:grid-cols-3 2xl:col-span-7 2xl:col-start-4">
          {brandImages.map((image, i) => (
            <div
              className="flex col-span-1 justify-center items-center bg-neutral-800 aspect-square"
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
