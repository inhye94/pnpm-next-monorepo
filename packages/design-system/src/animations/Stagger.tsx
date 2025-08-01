import { PolymorphicComponentProps } from "@workspace/utils/types";
import { motion } from "motion/react";
import { useMemo } from "react";
import { easing } from "./options";

// style varient
const listStyle = (staggerTime: number, delayChildren: number) => ({
  visible: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren,
    },
  },
  hidden: {},
});

const itemStyle = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: 20 },
};

// component
interface IStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerTime?: number;
  viewportOnce?: boolean;
  viewportAmount?: number;
  delayChildren?: number;
}

export default function Stagger<T extends React.ElementType = "div">({
  as,
  children,
  className,
  staggerTime = 0.7,
  viewportOnce = true,
  viewportAmount = 0.3,
  delayChildren = 0,
}: PolymorphicComponentProps<T, IStaggerProps>) {
  const Component = as || "div";
  const MotionComponent = useMemo(
    () => motion(Component) as React.ElementType,
    [Component],
  );

  return (
    <MotionComponent
      variants={listStyle(staggerTime, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, amount: viewportAmount }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

// item

function StaggerItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
}: PolymorphicComponentProps<T, IStaggerProps>) {
  const Component = as || "div";
  const MotionComponent = useMemo(
    () => motion(Component) as React.ElementType,
    [Component],
  );

  return (
    <MotionComponent variants={itemStyle} className={className}>
      {children}
    </MotionComponent>
  );
}

Stagger.Item = StaggerItem;
