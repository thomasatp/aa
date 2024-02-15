import Image from "next/image";
import Link from "next/link";
import MovingText from "@/app/ui/project/movingText";
import Header from "@/app/ui/project/header";
import Intro from "@/app/ui/project/intro";
import FirstPart from "@/app/ui/project/firstPart";
import SecondPart from "@/app/ui/project/secondPart";
import WideMedia from "@/app/ui/project/wideMedia";
import { getProjects, ProjectProps } from "@/app/lib/airtable";

export const dynamic = "force-dynamic"


export default async function Page({ params }: { params: { slug: ProjectProps["slug"] } }) {
  const { slug } = params;
  console.log(slug)
  // Appel des projets : tous les paramètres sont optionnels
  // 1 - status : rien, Draft, Staging ou Published
  // 2 - preview: preview ou rien pour charger toutes les données
  // 3 - maxRecords : rien ou nombre de projets à afficher
  const projects = await getProjects("Published")
  console.log(projects[1])
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
    thirdMedia
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
      <Intro tags={tags} description={description} />
      <FirstPart firstMedias={firstMedias} />
      <SecondPart
        secondPartTitle={secondPartTitle}
        secondPartDescription={secondPartDescription}
        secondMedias={secondMedias}
      />
      <WideMedia media={wideMedia}/>
      <section className="flex flex-col gap-10 py-24 xl:gap-48 bg-neutral-100 dark:bg-neutral-900 lg:py-48">
      <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
        {thirdPartTitle && (
          <h2 className="col-span-12 col-start-1 text-2xl font-semibold sm:text-4xl xl:col-span-8 xl:col-start-4">
            {thirdPartTitle}
          </h2>
        )}
        
      </div>
      <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
        {thirdPartDescription && (
          <p className="col-span-12 col-start-1 text-xl sm:text-2xl xl:col-span-3 xl:col-start-2 text-neutral-600 dark:text-neutral-400">
            {thirdPartDescription}
          </p>
        )}
        {thirdMedia &&
            <div className="relative col-start-1 col-span-12 xl:col-start-6 xl:col-span-6">
              {thirdMedia.type === "video/mp4" ? (
                <video
                  className="w-full h-auto"
                  preload="auto"
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src={thirdMedia.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={`${thirdMedia.url}`}
                  alt={thirdMedia.name}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto"
                />
              )}
            </div>
          }
      </div>
    </section>
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
