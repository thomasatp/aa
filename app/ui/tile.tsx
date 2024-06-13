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
      className={clsx(`relative transition-all duration-700 group aspect-4/5`, {
        "col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3": !homepage,
        "w-[320px] min-w-[320px] xl:w-[500px] xl:min-w-[500px]": homepage,
      })}
    >
      <div className="overflow-hidden w-full h-full rounded-3xl transition-all duration-700 scale-100 group-hover:scale-103">
        <Media type={img.type} url={img.url} name={img.name} cover homepage/>
        <div className="flex absolute top-0 left-0 z-10 flex-col justify-between items-end p-6 w-full h-full backdrop-brightness-90 transition-all duration-700 lg:p-8 group-hover:backdrop-brightness-75">
          <div className="flex flex-col w-full">
            <div className="flex flex-wrap gap-y-0 gap-x-4 mb-4">
              {tags.map((tag, index) => (
                <p
                  className="text-base font-medium text-white transition-all duration-300"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="flex mb-4 text-3xl font-bold text-white">{title}</h2>
          </div>
          <Link
            href={`/projets/${slug}`}
            className="flex gap-x-0 justify-center items-center px-6 py-2 h-12 text-sm font-medium whitespace-nowrap bg-white rounded-full opacity-0 transition-all duration-300 translate-y-2 group/button group-hover:opacity-100 hover:gap-x-2 group-hover:translate-y-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-neutral-950 hover:bg-white"
          >
            En savoir plus
            <div className="w-0 transition-all duration-300 group-hover/button:w-4">
              <Arrow className="opacity-0 transition-all duration-300 group-hover/button:opacity-100 fill-neutral-950" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
