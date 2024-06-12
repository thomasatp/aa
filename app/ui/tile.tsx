import Link from "next/link";
import { ProjectProps } from "../lib/types";
import Media from "./project/media";
import Arrow from "./navigation/arrow";

type TileProps = {
  slug: ProjectProps["slug"];
  title: ProjectProps["title"];
  description: ProjectProps["description"];
  tags: ProjectProps["tags"];
  img: ProjectProps["img"];
  homepage?: boolean;
};

import clsx from "clsx";

export default function Tile({
  title,
  description,
  tags,
  img,
  slug,
  homepage,
}: TileProps) {
  return (
    <div
      className={clsx(`relative group aspect-4/5 transition-all duration-700`, {
        "col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3": !homepage,
        "w-[300px] min-w-[300px] xl:w-[500px] xl:min-w-[500px]": homepage,
      })}
    >
      <div className="w-full h-full scale-100 group-hover:scale-103 rounded-3xl overflow-hidden transition-all duration-700">
        <Media type={img.type} url={img.url} name={img.name} cover homepage/>
        <div className="absolute flex flex-col items-end justify-between top-0 left-0 w-full h-full transition-all duration-700 p-8 z-10 backdrop-brightness-90 group-hover:backdrop-brightness-75">
          <div className="flex flex-col w-full">
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
              {tags.map((tag, index) => (
                <p
                  className="text-base font-medium transition-all duration-300 text-white"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="flex text-3xl text-white font-bold mb-4">{title}</h2>
          </div>
          <Link
            href={`/projets/${slug}`}
            className="group/button opacity-0 translate-y-2 group-hover:opacity-100 gap-x-0 hover:gap-x-2 group-hover:translate-y-0 flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-neutral-950 hover:bg-white h-12 px-6 py-2"
          >
            En savoir plus
            <div className="w-0 group-hover/button:w-4 transition-all duration-300">
              <Arrow className="opacity-0 group-hover/button:opacity-100 transition-all duration-300 fill-neutral-950" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
