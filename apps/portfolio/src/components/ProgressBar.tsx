"use client";

import { motion, useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="z-progress bg-cautionary fixed top-50 right-0 left-0 h-6 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
