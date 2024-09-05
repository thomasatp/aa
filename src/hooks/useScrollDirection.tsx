"use client";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { RefObject, useRef, useState, useEffect } from "react";
export function useScrollDirection() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [scrollLevel, setScrollLevel] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [filterTop, setFilterTop] = useState(0);
  const [navOnTop, setNavOnTop] = useState(true);

  const { scrollY } = useScroll();
  const contentRef = useRef<HTMLElement | null>(null);

  // useMotionValueEvent(scrollY, "change", (prev) => {
  //   setCurrentScroll(prev);
  //   prev > 120 ? setNavOnTop(true) : setNavOnTop(false);
  //   contentRef.current && setFilterTop(contentRef.current?.offsetTop - prev);
  //   if (prev > 120) {
  //     prev < currentScroll ? setIsScrollDown(false) : setIsScrollDown(true);
  //     isScrollDown && currentScroll > scrollLevel + 20
  //       ? setIsVisible(false)
  //       : currentScroll < scrollLevel - 20 && setIsVisible(true);
  //   } else {
  //     setIsVisible(true);
  //   }
  //   console.log(scrollLevel);
  // });

  useMotionValueEvent(scrollY, "change", (prev) => {
    setCurrentScroll(prev);
    prev > 120 ? setNavOnTop(true) : setNavOnTop(false);
    contentRef.current && setFilterTop(contentRef.current?.offsetTop - prev);
    prev < currentScroll ? setIsScrollDown(false) : setIsScrollDown(true);
    isScrollDown && currentScroll > scrollLevel + 20
      ? setIsVisible(false)
      : currentScroll < scrollLevel - 20 && setIsVisible(true);

    console.log(scrollLevel);
  });

  useEffect(() => {
    let stopScroll = () =>
      setTimeout(() => {
        window.pageYOffset !== currentScroll && setScrollLevel(currentScroll);
      }, 100);
    stopScroll();
    return () => clearTimeout(stopScroll());
  });

  return [
    isVisible,
    contentRef as RefObject<HTMLDivElement>,
    filterTop,
    isScrollDown,
    scrollY,
  ] as const;
}
