"use client";
import React, { useState, useRef, useEffect } from "react";
import Tile from "../tile";
import {
  motion,
  useScroll,
  useTransform,
  useDragControls,
} from "framer-motion";

export default function SliderDrag({ projects }: { projects: any[] }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    container.current &&
      setWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      container.current &&
        setWidth(container.current.scrollWidth - container.current.offsetWidth);
    });
    return () =>  {
      window.removeEventListener("resize", () => {
        container.current &&
          setWidth(container.current.scrollWidth - container.current.offsetWidth);
      });
    }
  });

  return (
    <div ref={container} className="relative w-full flex flex-col mt-20 overflow-x-hidden py-4 ">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 80 }}
        className="flex flex-row gap-6 px-6 lg:px-20"
      >
        {projects.map(({ title, description, tags, img, slug }, i) => (
          <Tile
            key={i}
            title={title}
            description={description}
            tags={tags}
            img={img}
            slug={slug}
            homepage
          />
        ))}
      </motion.div>
    </div>
  );
}
