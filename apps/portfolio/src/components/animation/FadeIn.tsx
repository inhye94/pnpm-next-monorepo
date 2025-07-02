import { easing } from "@/shared/animation";
import { PolymorphicComponentProps } from "@workspace/utils/types";
import { motion } from "motion/react";

interface IFadeInStyleProps {
  y?: number | string;
  x?: number | string;
  opacity?: number;
  duration?: number;
  viewportOnce?: boolean;
  viewportAmount?: number;
  children: React.ReactNode;
  className?: string;
}

interface IFadeInProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeIn<T extends React.ElementType = "div">({
  as,
  y = 0,
  x = 0,
  opacity = 0,
  duration = 0.7,
  viewportOnce = true,
  viewportAmount = 0,
  children,
  className,
}: PolymorphicComponentProps<T, IFadeInStyleProps | IFadeInProps>) {
  const Component = as || "div";
  const MotionCompoenent = motion(Component) as React.ElementType;

  return (
    <MotionCompoenent
      initial={{ opacity, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ease: easing, duration }}
      viewport={{ once: viewportOnce, amount: viewportAmount }}
      className={className}
    >
      {children}
    </MotionCompoenent>
  );
}
