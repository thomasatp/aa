"use client";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useVelocity,
} from "framer-motion";
import clsx from "clsx";
import { useEffect, useState } from "react";
export default function NavContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  useMotionValueEvent(scrollY, "change", (prev) => {
    setCurrentScroll(prev);
    prev < currentScroll && scrollVelocity > 500
      ? setIsScrollDown(false)
      : scrollVelocity > 500 && setIsScrollDown(true);
    console.log("Velocity", scrollVelocity);
  });
  useEffect(() => {
    return velocity.onChange((latestVelocity) => {
      setScrollVelocity(Math.abs(latestVelocity));
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={clsx(
        "flex sticky left-0 z-40 flex-row gap-6 justify-between items-center px-6 pb-6 w-full h-32 transition-all lg:pb-0 lg:h-52 lg:px-20",
        {
          "top-0": !isScrollDown,
          "-top-32 lg:-top-52": isScrollDown,
        }
      )}
    >
      {children}
    </motion.nav>
  );
}
