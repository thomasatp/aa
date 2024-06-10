"use client";
import React, { useRef } from "react";
import Media from "../project/media";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeHero() {
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const scale = useTransform(scrollY, [0, 600], [1, 0.82]);
  const border = useTransform(scrollY, [0, 600], [40, 80]);

  return (
    <section ref={ref} className="px-6 lg:px-20">
      <motion.section
        style={{ scale: scale, borderRadius: border }}
        className="relative  w-full mt-[calc(120px)] h-[calc(100vh-240px)] overflow-hidden"
      >
        <Media type="video/mp4" url="/medias/real.mp4" name="hero" cover />
      </motion.section>
    </section>
  );
}
