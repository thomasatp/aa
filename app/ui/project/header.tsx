import Image from "next/image";
import Media from "./media";
import { MediaTypes } from "@/app/lib/types";

export default function Header({
  title,
  img,
}: {
  title: string;
  img: MediaTypes;
}) {
  return (
    <section className="relative z-10 grid grid-cols-12 gap-0 px-0 py-0 mt-0 lg:mt-48 lg:px-20">
      <div className="relative col-span-12 col-start-1 lg:col-span-10 lg:col-start-3 2xl:col-span-7 2xl:col-start-4 aspect-square lg:aspect-4/3 xl:aspect-video transition duration-300 pointer-events-none;">
        <Media type={img.type} url={img.url} name={img.name} cover/>
      </div>
      <h1 className="relative lg:absolute px-6 mt-8 lg:mt-0 lg:px-0 lg:left-0 lg:right-0 z-10 lg:bottom-8 col-start-1 xl:col-start-2 col-span-12 xl:col-span-10 leading-[0.8] font-semibold mb-4 text-[14vw] break-words lg:text-[12vw]">
        {title}
      </h1>
    </section>
  );
}
