"use client";

import { MediaProps } from "@/app/lib/types";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import placeholder from "@/public/medias/placeholder.png"
// The format prop must be an object-fit tailwind property


export default function Media({ type, url, name, cover }: MediaProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }, );
  const loaded = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
  const unloaded = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
  return type === "video/mp4" ? (
    <video
      ref={ref}
      className={clsx("w-full transition-all duration-700", {
        "object-cover h-full": cover,
        "h-auto": !cover

      })}
      preload="auto"
      autoPlay
      playsInline
      loop
      muted
      // style={{clipPath: isInView ? loaded : unloaded}}
    >
      <source src={url} type="video/mp4" />
    </video>
  ) : (
    cover ? <Image
      ref={ref}
      src={url ? `${url}` : placeholder}
      alt={name}
      fill
      sizes="1000"
      loading="lazy"
      className={"w-full object-cover transition-all duration-700"}
      // style={{clipPath: isInView ? loaded : unloaded}}
    /> : <Image
      ref={ref}
      src={`${url}`}
      alt={name}
      width={1000}
      height={1000}
      loading="lazy"
      className={"w-full h-auto transition-all duration-700"}
      // style={{clipPath: isInView ? loaded : unloaded}}
    />
  );
}
