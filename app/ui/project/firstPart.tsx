"use client";
import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import { MediaTypes } from "@/app/lib/types";
import Media from "./media";
import { motion } from "framer-motion";
import { useSkew } from "@/app/hooks/useSkew";

export default function FirstPart({
  firstMedias,
}: {
  firstMedias: MediaTypes[] | undefined;
}) {
  const skew = useSkew();

  return (
    firstMedias?.length !== 0 && (
      <section className="grid relative grid-cols-12 gap-y-6 items-center px-6 mb-24 lg:mb-32 xl:mb-48 xl:gap-y-40">
        {firstMedias?.map(({ url, name, type }, i: number) => (
          <motion.div
            style={{ skewY: skew }}
            key={i}
            className={clsx("", {
              "medias first-medias": firstMedias.length > 1,
              "col-start-1 col-span-12 xl:col-start-3 xl:col-span-8":
                firstMedias.length < 2,
            })}
          >
            <Media type={type} url={url} name={name} />
          </motion.div>
        ))}
      </section>
    )
  );
}
