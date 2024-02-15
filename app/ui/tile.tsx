"use client";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectProps } from "../lib/airtable";

type TileProps = {
  slug: ProjectProps["slug"];
  title: ProjectProps["title"];
  tags: ProjectProps["tags"];
  img: ProjectProps["img"];
  homepage?: boolean;
};

import clsx from "clsx";
import Image from "next/image";

export default function Tile({ title, tags, img, slug, homepage }: TileProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20px 0px -20px 0px" });
  return (
    <Link
      ref={ref}
      href={`/work/${slug}`}
      className={clsx(
        `relative col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3`,
        {
          "after-tile": homepage,
          "opacity-100 translate-y-0": isInView,
          "opacity-0 translate-y-5": !isInView,
        }
      )}
    >
      <div className="relative flex items-center justify-center p-8 aspect-4/5">
        <Image
          src={`${img.url}`}
          alt={img.name}
          priority
          fill
          sizes="800"
          className={clsx("w-full object-cover transition-all duration-300")}
        />
      </div>
      <div className="flex flex-col items-baseline mt-4">
        <h3 className="flex flex-1 text-base font-semibold uppercase">
          {title}
        </h3>
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
