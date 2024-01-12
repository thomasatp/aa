import { projects } from "../../lib/data";
import Hero from "../../ui/hero";
import Image from "next/image";
import clsx from "clsx";

export async function generateStaticParams() {
  const posts = projects;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const {title, mainImg} = projects.filter((p) => p.slug === slug)[0];
  console.log(title);

  return (
    <main>
      <section className="relative z-10 grid grid-cols-12 gap-6 px-0 py-0 mt:0 lg:mt-48 lg:px-20">
        <h1 className="absolute left-6 right-6 lg:left-20 lg:right-20 z-10 top-1/3 col-span-12 leading-[0.8] font-semibold mb-4 text-[20vw] lg:text-[20vw] xl:text-[14vw]">
          {title}
        </h1>
        <div className="relative col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 aspect-square lg:aspect-video">
          {mainImg && <Image
            src={`${mainImg}`}
            alt={title}
            fill
            sizes="800"
            className={clsx(" w-full object-cover")}
          />}
        </div>
        <p className="grid items-end col-span-12 col-start-1 mb-6 text-xl text-white leading-1 xl:col-start-7 2xl:col-start-8 xl:col-span-4 2xl:col-span-3 max-lg:order-5 max-lg:text-xl ">
          Blablabla
        </p>
      </section>
      
    </main>
  );
}
