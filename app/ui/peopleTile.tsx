"use client";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PeopleProps } from "../lib/types";
import placeholder from "@/public/medias/placeholder.png"


import clsx from "clsx";
import Image from "next/image";

export default function PeopleTile({ name, job, media }: PeopleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20px 0px -20px 0px" });
  return (
    <div
      ref={ref}
      className={clsx(
        `relative col-span-6 xl:col-span-4 2xl:col-span-3`,
        {
          "opacity-100 translate-y-0": isInView,
          "opacity-0 translate-y-5": !isInView,
        }
      )}
    >
      <div className="relative flex items-center justify-center p-8 aspect-4/5">
        <Image
          src={media && media.url !== "" ? `${ media.url }` : placeholder}
          alt={media ? media.name : name}
          fill
          sizes="800"
          className={clsx("w-full object-cover transition-all duration-300")}
        />
      </div>
      <div className="flex flex-col items-baseline mt-4">
        <h2 className="flex flex-1 text-base font-semibold uppercase">
          {name}
        </h2>
        <div className="flex flex-wrap gap-1 mt-3">
          
            <p
              className="px-3 py-1 text-sm transition-all duration-300 border rounded-full dark:border-neutral-600 dark:text-neutral-500 border-neutral-400 text-neutral-500"
              
            >
              {job}
            </p>
        </div>
      </div>
    </div>
  );
}
