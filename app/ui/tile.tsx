import Link from "next/link";
import { ProjectProps } from "../lib/types";
import Media from "./project/media";

type TileProps = {
  slug: ProjectProps["slug"];
  title: ProjectProps["title"];
  tags: ProjectProps["tags"];
  img: ProjectProps["img"];
  homepage?: boolean;
};

import clsx from "clsx";

export default function Tile({ title, tags, img, slug, homepage }: TileProps) {
  return (
    <Link
      href={`/projets/${slug}`}
      className={clsx(
        `relative col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3`,
        {
          "after-tile": homepage,
        }
      )}
    >
      <div className="relative flex items-center justify-center transition-all duration-700 aspect-4/5">
        <Media type={img.type} url={img.url} name={img.name} cover/>
      </div>
      <div className="flex flex-col items-baseline mt-4">
        <h2 className="flex flex-1 text-base font-semibold uppercase">
          {title}
        </h2>
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <p
              className="px-3 py-1 text-sm transition-all duration-300 border rounded-full dark:border-neutral-600 dark:text-neutral-500 border-neutral-400 text-neutral-500"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
