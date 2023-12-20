"use client";

import { useGrid } from "../lib/gridProvider";

import clsx from "clsx";
import Image from "next/image";

type TileProps = {
  title: string;
  tags: string[];
  img?: string;
  position?: string;
};

export default function Tile({ title, tags, img, position }: TileProps) {
  const { visible } = useGrid();
  return (
    <div
      className={clsx(`col-span-12 sm:col-span-6 xl:col-span-4 2xl:col-span-3`, {
        "2xl:col-start-7": position === "middle",
        "2xl:col-start-10": position === "end",
        "border border-stone-800": visible,
      })}
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
          className={clsx("w-full object-cover")}
        />
      </div>
      <div className="flex items-baseline mt-4">
        <h3 className="flex flex-1 text-xl font-semibold">{title}</h3>
        {tags.map((tag, index) => (
          <p className="gap-2 text-xs uppercase" key={index}>
            <span className="ml-2">{tag}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
