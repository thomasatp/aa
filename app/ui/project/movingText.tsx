"use client"
import { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useSkew } from "@/app/hooks/useSkew";

export default function MovingText({ children }: { children: any }) {
  const baseX = useMotionValue(0);
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };
  const x = useTransform(baseX, (v) => `${wrap(-20, -40, v)}%`);
  const skew = useSkew()

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * (delta / 3000);
    directionFactor.current = -1;
    moveBy -= directionFactor.current * moveBy * 0.01;
    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="flex overflow-hidden absolute left-0 top-1/2 z-10 flex-nowrap w-full whitespace-nowrap lg:-translate-y-1/2">
      <motion.div style={{skewY: skew, x:x}} className="text-[28vw] lg:text-[20vw] xl:text-[14vw] flex whitespace-nowrap flex-nowrap">
        <div className="flex"><span className="block mr-16 font-bold text-white opacity-80 dark:text-neutral-950">{children}</span><span className="block mr-16 font-bold text-red-500 opacity-80 text-coral">{children}</span></div>
        <div className="flex"><span className="block mr-16 font-bold text-white opacity-80 dark:text-neutral-950">{children}</span><span className="block mr-16 font-bold text-red-500 opacity-80 text-coral">{children}</span></div>
        <div className="flex"><span className="block mr-16 font-bold text-white opacity-80 dark:text-neutral-950">{children}</span><span className="block mr-16 font-bold text-red-500 opacity-80 text-coral">{children}</span></div>
        <div className="flex"><span className="block mr-16 font-bold text-white opacity-80 dark:text-neutral-950">{children}</span><span className="block mr-16 font-bold text-red-500 opacity-80 text-coral">{children}</span></div>
        <div className="flex"><span className="block mr-16 font-bold text-white opacity-80 dark:text-neutral-950">{children}</span><span className="block mr-16 font-bold text-red-500 opacity-80 text-coral">{children}</span></div>
      </motion.div>
    </div>
  );
}

