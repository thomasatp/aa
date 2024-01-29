import { getProjects } from "../../lib/notion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import MovingText from "@/app/ui/movingText";

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const { slug } = params;
  const { title, img, description, tags, firstMedias } = projects.filter(
    (p) => p.slug === slug
  )[0];

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
      <section className="relative z-10 grid grid-cols-12 gap-6 px-0 py-0 mt:0 lg:mt-48 lg:px-20">
        <h1 className="absolute left-6 right-6 lg:left-20 lg:right-20 z-10 top-1/3 col-span-12 leading-[0.8] font-semibold mb-4 text-[20vw] lg:text-[20vw] xl:text-[14vw]">
          {title}
        </h1>
        <div className="relative col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 aspect-square lg:aspect-video">
          <Image
            src={`${img}`}
            alt={title}
            fill
            loading="lazy"
            sizes="800"
            className={clsx(" w-full object-cover")}
          />
        </div>
      </section>
      <section className="relative grid grid-cols-12 px-6 mt-10 xl:mt-20 max-lg:gap-y-12 lg:px-20">
        <div className="col-span-12 col-start-1 xl:col-span-2">
          <p className="mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400">
            Skills
          </p>
          <div className="flex flex-col text-lg font-semibold xl:text-4xl">
            {tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="col-span-12 col-start-1 xl:col-start-4 xl:col-span-7">
          <p className="mb-6 text-base font-normal uppercase xl:mb-12 text-neutral-400">
            Services
          </p>
          <div className="text-lg font-semibold xl:text-4xl">
            {description}
          </div>
        </div>
      </section>
      <section className="relative grid items-center grid-cols-12 px-6 mt-20 gap-y-6 xl:gap-y-20 lg:px-20">
        {firstMedias?.length !== 0 &&
          firstMedias.map((media: any, i: any) => (
            <div key={i} className="first-medias">
              {media.includes(".mp4") ? (
                <video
                  className="object-cover w-full h-full"
                  preload="auto"
                  autoPlay
                  playsInline
                  loop
                  muted
                >
                  <source src={media} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={`${media}`}
                  alt={media}
                  fill
                  loading="lazy"
                  sizes="800"
                  className={clsx("absolute w-full object-cover")}
                />
              )}
            </div>
          ))}
      </section>
      <Link href={`/work/${nextProject.url}`}>
        <section className="relative flex justify-center gap-6 px-6 py-32 mt-32 pointer-events-none lg:py-48 lg:mt-48 bg-zinc-300 text-neutral-950">
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
