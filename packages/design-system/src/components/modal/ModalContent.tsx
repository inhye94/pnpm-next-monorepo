"use client";

import classNames from "classnames";
import { motion } from "motion/react";
import { Dialog } from "radix-ui";

/**
 * MocalComponent 컴포넌트
 *
 * 스타일:
 * 1. tailwind의 @layer components 사용
 * 2. styles/components/modal.css > .modal-content
 */

export function ModalContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ translateY: "-16px" }}
      animate={{
        translateY: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <Dialog.Content className={classNames("modal-content", className)}>
        {children}
      </Dialog.Content>
    </motion.div>
  );
}
