"use client";
import { useGrid } from "../lib/gridProvider";
import Link from "next/link";
import { SkillsType } from "../lib/data";

type TileProps = {
  slug: string;
  title: string;
  tags: SkillsType;
  img?: string;
  homepage?: boolean
};

import clsx from "clsx";
import Image from "next/image";

export default function Tile({ title, tags, img, slug, homepage }: TileProps ) {
  const { visible } = useGrid();
  return (
    <Link
      href={`/projects/${slug}`}
      className={clsx(
        `relative col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3`,
        {
          "border border-stone-800": visible,
          "after-tile": homepage
        }
      )}
    >
      <div
        className={clsx(
          "relative bg-stone-900 aspect-4/5 flex justify-center items-center p-8",
          {
            "border border-stone-800 invert": visible,
          }
        )}
      >
        <Image
          src={`${img}`}
          alt={title}
          fill
          sizes="800"
          className={clsx("w-full object-cover")}
        />
      </div>
      <div className="flex flex-col items-baseline mt-4">
        <h3 className="flex flex-1 text-base font-semibold uppercase">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <p
              className="px-3 py-1 text-sm border rounded-full border-neutral-700 text-neutral-600"
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
