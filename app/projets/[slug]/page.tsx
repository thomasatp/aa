import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import MovingText from "@/app/ui/project/movingText";
import Header from "@/app/ui/project/header";
import Intro from "@/app/ui/project/intro";
import FirstPart from "@/app/ui/project/firstPart";
import SecondPart from "@/app/ui/project/secondPart";
import WideMedia from "@/app/ui/project/wideMedia";
import ThirdPart from "@/app/ui/project/thirdPart";
import { ProjectProps } from "@/app/lib/types";
import { getProjects } from "@/app/lib/getProjects";
import Media from "@/app/ui/project/media";

type Props = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const projects = await getProjects("Published");
  const singleProject = projects.filter((p) => p.slug === slug)[0];

  return {
    title: `And After | ${singleProject.title}`,
    description: singleProject.description,
  };
}

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
  const projects = await getProjects("Published");
  const {
    title,
    img,
    description,
    tags,
    link,
    firstMedias,
    templateB,
    secondPartTitle,
    secondPartDescription,
    secondMedias,
    wideMedia,
    thirdPartTitle,
    thirdPartDescription,
    thirdMedia,
  } = projects.filter((p) => p.slug === slug)[0];

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
      <Intro tags={tags} description={description} link={link} />
      <FirstPart firstMedias={firstMedias} />
      <SecondPart
        secondPartTitle={secondPartTitle}
        secondPartDescription={secondPartDescription}
        secondMedias={secondMedias}
        templateB={templateB}
      />
      <WideMedia media={wideMedia} />
      <ThirdPart
        thirdPartTitle={thirdPartTitle}
        thirdPartDescription={thirdPartDescription}
        thirdMedia={thirdMedia}
      />
      <Link href={`/projets/${nextProject.url}`}>
        <section className="flex relative gap-6 justify-center px-6 py-24 pointer-events-none lg:py-32 xl:py-48 bg-neutral-950 dark:bg-white text-neutral-950">
          <div className="relative w-full lg:w-1/2 lg:z-10 aspect-square lg:aspect-4/3">
            <p className="absolute -top-16 left-1/2 text-lg text-white uppercase -translate-x-1/2 dark:text-neutral-950 lg:text-2xl">
              Next
            </p>
            <Media
              type={nextProject.img.type}
              url={nextProject.img.url}
              name={nextProject.title}
              cover
            />
          </div>
          <MovingText>{nextProject.title}</MovingText>
        </section>
      </Link>
    </main>
  );
}
