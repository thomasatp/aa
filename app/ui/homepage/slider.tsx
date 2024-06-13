"use client";
import React, { useState, useRef, useEffect } from "react";
import Tile from "../tile";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Slider({ projects }: { projects: any[] }) {
  const container = useRef(null);
  const sliderContainer = useRef<HTMLDivElement>(null);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);


  useEffect(() => {
    if (sliderContainer.current) {
      setSliderHeight(sliderContainer.current.offsetHeight);
      setSliderWidth(
        sliderContainer.current.scrollWidth
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (sliderContainer.current) {
        setSliderHeight(sliderContainer.current.offsetHeight);
        setSliderWidth(
          sliderContainer.current.scrollWidth
        );
        console.log(sliderWidth)
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (sliderContainer.current) {
          setSliderHeight(sliderContainer.current.offsetHeight);
          setSliderWidth(
            sliderContainer.current.scrollWidth
          );
        }
      });
    };
  });
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );
  return (
    <div
      ref={container}
      style={{height: `${sliderWidth / 2}px`}}
      className="flex relative flex-col mt-20 w-full 2xl:col-start-2"
    >
      <div
        style={{ top: `calc(50% - ${sliderHeight / 2}px)` }}
        className="flex sticky max-w-full overflow-x-clip h-min"
      >
        <motion.div
          ref={sliderContainer}
          style={{ x }}
          className="flex gap-6 px-6 lg:px-20"
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
    </div>
  );
}
