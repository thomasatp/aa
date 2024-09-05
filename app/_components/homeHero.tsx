"use client";
import React, { useRef } from "react";
import Media from "../projets/_components/media";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeHero({ media }: { media?: any }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const container = useRef<HTMLDivElement>(null);
  const containerHeight = container.current
    ? container.current.offsetHeight
    : 600;

  const padding = useTransform(
    scrollYProgress,
    [0, 1],
    ["clamp(0px, 0vw, 0px)", "clamp(16px, 5vw, 80px)"]
  );
  const border = useTransform(
    scrollYProgress,
    [0, 1],
    ["clamp(0px, 0vw, 0px)", "clamp(0px, 5vw, 80px)"]
  );

  return (
    <section className="overflow-hidden px-0">
      <motion.div
        ref={container}
        style={{ paddingLeft: padding, paddingRight: padding }}
        className="w-full"
      >
        <motion.div
          ref={ref}
          style={{ borderRadius: border }}
          className="relative w-full h-[calc(100vh-120px)] overflow-hidden"
        >
          <Media
            type={media ? media.type : "video/mp4"}
            url={media ? media.url : "/medias/grafik.mp4"}
            name="hero"
            cover
            homepage
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
