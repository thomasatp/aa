import { projects } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import MovingText from "@/app/ui/movingText";

export async function generateStaticParams() {
  const posts = projects;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, mainImg } = projects.filter((p) => p.slug === slug)[0];

  const projectPosition = projects.findIndex((p) => p.slug === slug);
  const nextProjectIndex =
    projectPosition + 1 < projects.length ? projectPosition + 1 : 0;
  const nextProject = {
    title: projects[nextProjectIndex].title,
    url: projects[nextProjectIndex].slug,
    img: projects[nextProjectIndex].img
  };

  console.log(nextProject);

  return (
    <main>
      <section className="relative z-10 grid grid-cols-12 gap-6 px-0 py-0 mt:0 lg:mt-48 lg:px-20">
        <h1 className="absolute left-6 right-6 lg:left-20 lg:right-20 z-10 top-1/3 col-span-12 leading-[0.8] font-semibold mb-4 text-[20vw] lg:text-[20vw] xl:text-[14vw]">
          {title}
        </h1>
        <div className="relative col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 aspect-square lg:aspect-video">
          {mainImg && (
            <Image
              src={`${mainImg}`}
              alt={title}
              fill
              sizes="800"
              className={clsx(" w-full object-cover")}
            />
          )}
        </div>
        <p className="grid items-end col-span-12 col-start-1 mb-6 text-xl text-white leading-1 xl:col-start-7 2xl:col-start-8 xl:col-span-4 2xl:col-span-3 max-lg:order-5 max-lg:text-xl ">
          Blablabla
        </p>
      </section>
      <Link href={`/work/${nextProject.url}`}>
        <section className="relative flex justify-center gap-6 px-6 py-32 mt-32 pointer-events-none lg:py-48 lg:mt-48 bg-zinc-300 text-neutral-950">
          
          <div className="relative w-full lg:w-1/2 lg:z-10 aspect-square lg:aspect-4/3">
            <p className="absolute text-lg uppercase -translate-x-1/2 lg:text-2xl -top-16 left-1/2">Next</p>
            <Image
              src={`${nextProject.img}`}
              alt={nextProject.title}
              fill
              sizes="800"
              className={clsx(" w-full object-cover")}
            />
          </div>
          <MovingText>{nextProject.title}</MovingText>
        </section>
      </Link>
    </main>
  );
}
