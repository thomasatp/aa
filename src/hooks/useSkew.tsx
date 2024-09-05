"use client";
import {
  useVelocity,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { RefObject, useRef } from "react";

export function useSkew(ref: any) {
  // const { scrollY } = useScroll();

  // const scrollSmooth = useSpring(scrollY, { damping: 50, stiffness: 400 });

  // const scrollVelocity = useVelocity(scrollSmooth);

  // const skew = useTransform(scrollVelocity, [-3000, 0, 3000], [-2, 0, 2]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const skew = useTransform(scrollYProgress, [0,1], ["13deg", "0deg"]);

  return  {skew};
}
