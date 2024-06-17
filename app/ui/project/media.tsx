"use client";

import { MediaProps } from "@/app/lib/types";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import placeholder from "@/public/medias/placeholder.png";
// The format prop must be an object-fit tailwind property

export default function Media({
  type,
  url,
  name,
  cover,
  homepage,
}: MediaProps) {
  return type === "video/mp4" ? (
    <video
      className={clsx("w-full rounded-3xl transition-all duration-700", {
        "object-cover h-full": cover,
        "h-auto": !cover,
        "rounded-none": homepage,
      })}
      preload="auto"
      autoPlay
      playsInline
      loop
      muted
    >
      <source src={url} type="video/mp4" />
    </video>
  ) : cover ? (
    <Image
      draggable="false"
      src={url ? `${url}` : placeholder}
      alt={name}
      fill
      sizes="1000"
      loading="lazy"
      className={clsx("object-cover w-full rounded-3xl transition-all duration-700", {
        "rounded-3xl": homepage,
      })}
    />
  ) : (
    <Image
      draggable="false"
      src={`${url}`}
      alt={name}
      width={1000}
      height={1000}
      loading="lazy"
      className={clsx("w-full h-auto rounded-3xl transition-all duration-700", {
        "rounded-3xl": homepage,
      })}
    />
  );
}
