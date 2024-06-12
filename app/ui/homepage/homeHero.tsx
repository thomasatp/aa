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

  const padding = useTransform(scrollY, [0, 600], ["clamp(0px, 0vw, 0px)", "clamp(16px, 5vw, 80px)"]);
  const border = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section ref={ref} className="px-0 overflow-hidden">
      <motion.div
        style={{ paddingLeft: padding, paddingRight: padding }}
        className="w-full"
      >
        <motion.div
          style={{ borderRadius: border }}
          className="relative w-full h-[calc(100vh-120px)] overflow-hidden"
        >
          <Media type="video/mp4" url="/medias/grafik.mp4" name="hero" cover />
        </motion.div>
      </motion.div>
    </section>
  );
}
