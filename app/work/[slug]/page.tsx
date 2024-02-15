import Image from "next/image";
import Link from "next/link";
import MovingText from "@/app/ui/project/movingText";
import Header from "@/app/ui/project/header";
import Intro from "@/app/ui/project/intro";
import FirstPart from "@/app/ui/project/firstPart";
import SecondPart from "@/app/ui/project/secondPart";
import WideMedia from "@/app/ui/project/wideMedia";
import ThirdPart from "@/app/ui/project/thirdPart";
import { ProjectProps } from "@/app/lib/types";
import { useProjects } from "@/app/lib/useProjects";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: { slug: ProjectProps["slug"] };
}) {
  const { slug } = params;
  // Appel des projets : tous les paramètres sont optionnels
  // 1 - status : rien, Draft, Staging ou Published
  // 2 - preview: preview ou rien pour charger toutes les données
  // 3 - maxRecords : rien ou nombre de projets à afficher
  const projects = await useProjects("Published");
  const {
    title,
    img,
    description,
    tags,
    firstMedias,
    secondPartTitle,
    secondPartDescription,
    secondMedias,
    wideMedia,
    thirdPartTitle,
    thirdPartDescription,
    thirdMedia,
  } = projects.filter((p) => p.slug === slug)[0];
  console.log(thirdMedia, thirdPartDescription, thirdPartTitle);

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
      <WideMedia media={wideMedia} />
      <ThirdPart
        thirdPartTitle={thirdPartTitle}
        thirdPartDescription={thirdPartDescription}
        thirdMedia={thirdMedia}
      />
      <Link href={`/work/${nextProject.url}`}>
        <section className="relative flex justify-center gap-6 px-6 py-32 pointer-events-none lg:py-48 bg-zinc-300 text-neutral-950">
          <div className="relative w-full lg:w-1/2 lg:z-10 aspect-square lg:aspect-4/3">
            <p className="absolute text-lg uppercase -translate-x-1/2 lg:text-2xl -top-16 left-1/2">
              Next
            </p>
            <Image
              src={`${nextProject.img.url}`}
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
