"use client";
import { useRef } from "react";
import clsx from "clsx";
import { MediaTypes } from "@/app/lib/types";
import Media from "./media";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

export default function FirstPart({
  firstMedias,
}: {
  firstMedias: MediaTypes[] | undefined;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll();

  const translate = scrollYProgress;
  const down = useParallax(scrollYProgress, 300);
  const up = useParallax(scrollYProgress, -300);


  return (
    firstMedias?.length !== 0 && (
      <section
        ref={ref}
        className="relative grid items-center grid-cols-12 px-6 mb-24 lg:mb-32 xl:mb-48 gap-y-6 xl:gap-y-40"
      >
        {firstMedias?.map(({ url, name, type }, i: number) => (
          <motion.div
            key={i}
            style={{ y:i % 2 === 0 ? down : up }}
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
