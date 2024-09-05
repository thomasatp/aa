"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import services from "./services.json";
import { useRef } from "react";


import { useInView, motion } from "framer-motion";

export default function LottieBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20px 0px -20px 0px" });

  return (
    <motion.div>
      <Player
        ref={ref}
        autoplay
        keepLastFrame
        src={services}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Player>
    </motion.div>
  );
}
