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
  const [resize, setResize] = useState<boolean>(false);
  const controls = useDragControls()

  useEffect(() => {
    container.current &&
      setWidth(container.current.scrollWidth - container.current.offsetWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      container.current &&
        setWidth(container.current.scrollWidth - container.current.offsetWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        container.current &&
          setWidth(
            container.current.scrollWidth - container.current.offsetWidth
          );
      });
    };
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(true);
      setTimeout(() => {
        setResize(false);
      }, 100);
    });
  });

  return (
    <div
      ref={container}
      className="flex relative flex-col py-4 mt-20 w-full lg:overflow-hidden"
      
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragSnapToOrigin={resize}
        style={{ touchAction: "none" }}
        dragControls={controls}
        
        className="flex flex-row gap-6"
      >
        <div className="flex gap-6 px-6 lg:px-20">
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
        </div>
      </motion.div>
    </div>
  );
}
