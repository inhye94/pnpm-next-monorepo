import { motion } from "motion/react";

interface IAddedAnimationProps {
  children: React.ReactNode;
  className: string;
}

export default function AddedAnimation({
  children,
  className,
}: IAddedAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "10px" }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
