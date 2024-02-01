import { getAllProjects } from "../../lib/notion";
import Image from "next/image";
import Link from "next/link";
import MovingText from "@/app/ui/project/movingText";
import Header from "@/app/ui/project/header";
import Intro from "@/app/ui/project/intro";
import FirstPart from "@/app/ui/project/firstPart";
import SecondPart from "@/app/ui/project/secondPart";
import { TileProps } from "../../lib/notion";

export const revalidate = 3600


export default async function Page({ params }: { params: { slug: TileProps["slug"] } }) {
  const { slug } = params;
  const projects = await getAllProjects("Published");
  const {
    title,
    img,
    description,
    tags,
    firstMedias,
    secondPartTitle,
    secondPartDescription,
    secondMedias,
    fullMedia,
  } = projects.filter((p) => p.slug === slug)[0];

  console.log(projects[0].fullMedia);

  const projectPosition = projects.findIndex((p) => p.slug === slug);
  const nextProjectIndex =
    projectPosition + 1 < projects.length ? projectPosition + 1 : 0;
  const nextProject = {
    title: projects[nextProjectIndex].title,
    url: projects[nextProjectIndex].slug,
    img: projects[nextProjectIndex].img,
  };

  return (
    <main>
      <Header title={title} img={img} />
      <Intro tags={tags} description={description} />
      <FirstPart firstMedias={firstMedias} />
      <SecondPart
        secondPartTitle={secondPartTitle}
        secondPartDescription={secondPartDescription}
        secondMedias={secondMedias}
      />
      {fullMedia && (
        <section className="relative w-full aspect-video">
          {fullMedia.name.includes(".mp4") ? (
            <video
              className="object-cover w-full h-full"
              preload="auto"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src={fullMedia.url} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={`${fullMedia.url}`}
              alt={fullMedia.name.slice(0, fullMedia.name.length - 4)}
              fill
              loading="lazy"
              sizes="800"
              className="absolute object-cover w-full"
            />
          )}
        </section>
      )}
      <Link href={`/work/${nextProject.url}`}>
        <section className="relative flex justify-center gap-6 px-6 py-32 pointer-events-none lg:py-48 bg-zinc-300 text-neutral-950">
          <div className="relative w-full lg:w-1/2 lg:z-10 aspect-square lg:aspect-4/3">
            <p className="absolute text-lg uppercase -translate-x-1/2 lg:text-2xl -top-16 left-1/2">
              Next
            </p>
            <Image
              src={`${nextProject.img}`}
              alt={nextProject.title}
              fill
              sizes="800"
              className="object-cover w-full"
            />
          </div>
          <MovingText>{nextProject.title}</MovingText>
        </section>
      </Link>
    </main>
  );
}
