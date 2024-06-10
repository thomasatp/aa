"use client";
import React, { useState } from "react";
import Tile from "../tile";
import { motion } from "framer-motion";

export default function Slider({ projects }: { projects: any[] }) {
  const [dragg, setDragg] = useState(false);
  return (
    <motion.div className="relative w-full grid gap-6 gap-y-16 px-6 lg:px-20 mt-20 2xl:col-start-2 grid-flow-col overflow-hidden">
      <motion.div
        className="flex flex-row gap-6"
        drag="x"
        onDrag={() => setDragg(true)}
        onDragStart={() => setDragg(true)}
        onDragEnd={() => setDragg(false)}
      >
        {projects.map(({ title, tags, img, slug }, i) => (
          <Tile
            key={i}
            title={title}
            tags={tags}
            img={img}
            slug={slug}
            dragg={dragg}
            // homepage
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
