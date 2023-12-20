import Hero from "@/app/ui/hero";
import Nav from "@/app/ui/nav";
import Tile from "@/app/ui/tile";
import Grid from "@/app/ui/grid";
import { projects, skills, brandImages } from "./lib/data";
import Skills from "./ui/skills";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <Nav />
      <Grid />
      <Hero />
      <div className="relative grid grid-cols-12 gap-6 px-6 mt-20">
        {projects.map(({ title, tags, img, position }, i) => (
          <Tile
            key={i}
            title={title}
            tags={tags}
            img={img}
            position={position}
          />
        ))}
      </div>
      <Skills skills={skills} projects={projects} />
      <div className="relative grid grid-cols-12 gap-6 px-6 mt-20">
        <p className="col-span-12 col-start-1 text-2xl font-semibold xl:col-span-5 xl:col-start-2 xl:text-5xl">
          Proin tristique morbi et consectetur dictum sit. Mauris turpis amet
          tellus ipsum vitae massa. Nisl mattis placerat neque ut a ornare sem
          volutpat scelerisque.{" "}
        </p>
        <div className="flex flex-wrap items-baseline col-span-12 col-start-1 gap-6 scale-50 xl:scale-100 xl:gap-12 xl:col-span-4 xl:col-start-8 opacity-40">
          {brandImages.map((image, i) => (
            <Image
              key={i}
              src={image.url}
              alt={image.url}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
