"use client";

import { FadeIn } from "@workspace/design-system/animations";
import classNames from "classnames";
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
    <FadeIn y={-16} duration={0.3}>
      <Dialog.Content className={classNames("modal-content", className)}>
        {children}
      </Dialog.Content>
    </FadeIn>
  );
}
