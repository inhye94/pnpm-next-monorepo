import { motion } from "motion/react";
import { easing } from "./options";

interface IShakingProps {
  children: React.ReactNode;
}

export default function Shaking({ children }: IShakingProps) {
  return (
    <motion.span
      className="inline-block"
      whileInView={{ rotateZ: [0, 20, -10, 20, 0] }}
      transition={{ duration: 1, delay: 0.5, ease: easing }}
      aria-hidden
    >
      {children}
    </motion.span>
  );
}
