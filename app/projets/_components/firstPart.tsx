"use client";
import { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import { MediaTypes } from "@/lib/types";
import Media from "./media";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSkew } from "@/hooks/useSkew";

export default function FirstPart({
  firstMedias,
}: {
  firstMedias: MediaTypes[] | undefined;
}) {
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotateZ = useTransform(scrollYProgress, [0, 1], ["30deg", "0deg"]);

  useEffect(() => {
    console.log(ref.current);
  });

  return (
    firstMedias?.length !== 0 && (
      <section className="grid relative grid-cols-12 gap-y-6 items-center px-6 mb-24 lg:mb-32 xl:mb-48 xl:gap-y-40">
        {firstMedias?.map(({ url, name, type }, i: number) => (
          <motion.div
            ref={ref}
            style={{ rotateZ }}
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
