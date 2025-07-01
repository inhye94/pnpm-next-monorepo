"use client";

import { easing } from "@/shared/animation";
import { PolymorphicComponentProps } from "@/shared/polymorphic";
import { motion } from "motion/react";

// style varient
const listStyle = (staggerTime: number) => ({
  visible: {
    transition: {
      staggerChildren: staggerTime,
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
}

export default function Stagger<T extends React.ElementType = "div">({
  as,
  children,
  className,
  staggerTime = 0.7,
}: PolymorphicComponentProps<T, IStaggerProps>) {
  const Component = as || "div";
  const MotionCompoenent = motion(Component) as React.ElementType;

  return (
    <MotionCompoenent
      variants={listStyle(staggerTime)}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {children}
    </MotionCompoenent>
  );
}

// item

function StaggerItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
}: PolymorphicComponentProps<T, IStaggerProps>) {
  const Component = as || "div";
  const MotionCompoenent = motion(Component) as React.ElementType;

  return (
    <MotionCompoenent variants={itemStyle} className={className}>
      {children}
    </MotionCompoenent>
  );
}

Stagger.Item = StaggerItem;
