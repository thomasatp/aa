"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Baseline() {
  const [step, setStep] = useState(2);
  const x = useMotionValue(step);
  const translate = useTransform(
    x,
    [1, 2, 3, 4],
    ["0px", "-28px", "-56px", "-84px"]
  );

  useEffect(() => {
    const animation = animate(x, step, {
      duration: step === 1 ? 0 : 0.8,
      delay: step === 1 ? 0 : 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (step === 4) {
          x.set(step);
          setStep(1);
        } else {
          setStep(step + 1);
        }
      },
    });

    return () => animation.stop();
  });
  return (
    <div className="flex overflow-hidden absolute top-10 w-96 h-7 text-lg font-medium lg:top-12 lg:flex-row text-neutral-400">
      <motion.div style={{ translateY: translate }} className="flex flex-col">
        <p>Design UX/UI</p>
        <p>Développement web/mobile</p>
        <p>Branding</p>
        <p>Design UX/UI</p>
      </motion.div>
    </div>
  );
}
