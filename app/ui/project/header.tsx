import Image from "next/image";
import clsx from "clsx";

export default function Header({ title, img }: { title: string; img: string }) {
  return (
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
  );
}
