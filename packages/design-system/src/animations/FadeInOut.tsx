import { PolymorphicComponentProps } from "@workspace/utils/types";
import { motion } from "motion/react";
import { useMemo } from "react";

interface IFadeInOutProps {
  children: React.ReactNode;
  className?: string;
  showY?: number;
  showX?: number;
  hideY?: number;
  hideX?: number;
}

export default function FadeInOut<T extends React.ElementType = "div">({
  as,
  children,
  className,
  showY = 20,
  showX = 0,
  hideY = 0,
  hideX = 0,
}: PolymorphicComponentProps<T, IFadeInOutProps>) {
  const Component = as || "div";
  const MotionComponent = useMemo(
    () => motion(Component) as React.ElementType,
    [Component],
  );

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: showY, x: showX }}
      animate={{ y: 0, x: 0, opacity: 1 }}
      exit={{ opacity: 0, y: hideY, x: hideX }}
    >
      {children}
    </MotionComponent>
  );
}
