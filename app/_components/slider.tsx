"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from "swiper/modules";
import { useSwiper } from "swiper/react";
import Tile from "@/components/tile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { register } from "swiper/element/bundle";

register();

export default function Slider({ projects }: { projects: any[] }) {
  const swiper = useSwiper();
  const swiperElRef = useRef(null);
  return (
    <div className="flex relative flex-col mt-6 w-full 2xl:col-start-2">
      {/* <button onClick={() => swiper.slidePrev()}>
        Slide to the next slide
      </button>
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button> */}
      <div className="flex max-w-full">
        <Swiper
          ref={swiperElRef}
          id="swipper"
          className="flex gap-4 px-6 py-2 lg:py-3 lg:px-20"
          modules={[Scrollbar, Grid]}
          // scrollbar={{ draggable: true }}
          spaceBetween={16}
          scrollbar={{
            horizontalClass: "mx-20",
            verticalClass: "mt-6",
            snapOnRelease: true,
          }}
          parallax
          slidesPerView={3.5}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map(({ title, description, tags, img, slug }, i) => (
            <SwiperSlide key={`${i}-${title}`} className="aspect-4/5">
              <Tile
                title={title}
                description={description}
                tags={tags}
                img={img}
                slug={slug}
                homepage
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
