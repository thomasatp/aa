"use client";
import React, { useState, useRef, useEffect } from "react";
import Tile from "../tile";

export default function SliderNormal({ projects }: { projects: any[] }) {
  const container = useRef<HTMLDivElement>(null);
  const sliderContainer = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDown, setIsDown] = useState<boolean>(false);

  function mouseIsDown(e: React.MouseEvent<HTMLDivElement>) {
    setIsDown(true);
    if (container.current) {
      setStartX(e.pageX - container.current.offsetLeft);
      setScrollLeft(container.current.scrollLeft);
    }
    console.log(scrollLeft);
  }
  function mouseUp() {
    setIsDown(false);
  }
  function mouseLeave() {
    setIsDown(false);
  }
  function mouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isDown) {
      e.preventDefault();
      //Move vertcally
      if (container.current) {
        const x = e.pageX - container.current.offsetTop;
        const walkX = (x - startX) * 2;
        container.current.scrollLeft = scrollLeft - walkX;
      }
    }
  }


  return (
    <div className="flex relative flex-col mt-6 w-full 2xl:col-start-2">
      <div
        ref={container}
        onMouseDown={(e) => mouseIsDown(e)}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={(e) => mouseMove(e)}
        className="flex overflow-y-hidden overflow-x-scroll sticky max-w-full h-min no-scrollbar"
      >
        <div ref={sliderContainer} className="flex gap-4 px-6 py-2 lg:py-3 lg:px-20">
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
      </div>
    </div>
  );
}
