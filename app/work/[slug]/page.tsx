import { getProjects } from "../../lib/notion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import MovingText from "@/app/ui/project/movingText";
import Header from "@/app/ui/project/header";
import Intro from "@/app/ui/project/intro";
import FirstPart from "@/app/ui/project/firstPart";

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const { slug } = params;
  const { title, img, description, tags, firstMedias, secondPartTitle, secondPartDescription, secondMedias } = projects.filter(
    (p) => p.slug === slug
  )[0];

  console.log(projects[0])

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
      <Header title={title} img={img}/>
      <Intro tags={tags} description={description} />
      <FirstPart firstMedias={firstMedias}/>
      <section className="flex flex-col gap-10 py-32 mt-32 xl:gap-48 bg-neutral-100 dark:bg-neutral-900 lg:py-48 lg:mt-48">
        <div className="relative grid grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
        <h2 className="col-span-12 col-start-1 text-2xl font-semibold xl:text-4xl xl:col-span-4 xl:col-start-2">{secondPartTitle}</h2>
        <p className="col-span-12 col-start-1 text-lg xl:text-2xl xl:col-span-5 xl:col-start-7 text-neutral-600 dark:text-neutral-400">{secondPartDescription}</p>
      </div>
      <div className="relative grid items-center grid-cols-12 px-6 gap-y-6 xl:gap-y-40 lg:px-20">
        {secondMedias?.length !== 0 &&
          secondMedias?.map(({url, name}, i: number) => (
            <div key={i} className="medias second-medias">
              {name.includes(".mp4") ? (
                <video
                  className="object-cover w-full h-full"
                  preload="auto"
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src={url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={`${url}`}
                  alt={name.slice(0, name.length - 4)}
                  fill
                  loading="lazy"
                  sizes="800"
                  className={clsx("absolute w-full object-cover")}
                />
              )}
            </div>
          ))}
      </div>
      </section>
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
              className={clsx("w-full object-cover")}
            />
          </div>
          <MovingText>{nextProject.title}</MovingText>
        </section>
      </Link>
    </main>
  );
}
