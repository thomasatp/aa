"use client";
import React, { useRef } from "react";
import Media from "../project/media";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeHero() {
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
const container = useRef<HTMLDivElement>(null)
  const containerHeight = container.current ? container.current.offsetHeight : 600

  const padding = useTransform(scrollY, [0, containerHeight/2], ["clamp(0px, 0vw, 0px)", "clamp(16px, 5vw, 80px)"]);
  const border = useTransform(scrollY, [0, containerHeight/2], ["clamp(0px, 0vw, 0px)", "clamp(0px, 5vw, 80px)"]);

  return (
    <section ref={ref} className="overflow-hidden px-0">
      <motion.div
      ref={container}
        style={{ paddingLeft: padding, paddingRight: padding }}
        className="w-full"
      >
        <motion.div
          style={{ borderRadius: border }}
          className="relative w-full h-[calc(100vh-120px)] overflow-hidden"
        >
          <Media type="video/mp4" url="/medias/grafik.mp4" name="hero" cover homepage  />
        </motion.div>
      </motion.div>
    </section>
  );
}
