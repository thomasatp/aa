"use client";
import {
  useVelocity,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export function useSkew() {
  const { scrollY } = useScroll();

  const scrollSmooth = useSpring(scrollY, { damping: 50, stiffness: 400 });

  const scrollVelocity = useVelocity(scrollSmooth);

  const skew = useTransform(scrollVelocity, [-3000, 0, 3000], [-2, 0, 2]);
  return skew;
}
