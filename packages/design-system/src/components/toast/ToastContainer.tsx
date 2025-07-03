"use client";

import { FadeInOut } from "@workspace/design-system/animations";
import { AnimatePresence } from "motion/react";
import { useToastContext } from "../../providers/ToastProvider";
import { IToastMessage } from "./toast";
import ToastItem from "./ToastItem";

/**
 * ToastContainer 컴포넌트
 *
 * 특징:
 * 1. ToastProvider에서 제공하는 context를 useToastContext로 받아옴
 *
 * @example
<Providers>
  <ToastContainer />
</Providers>
 */

export default function ToastContainer() {
  const { toastMessages } = useToastContext() as {
    toastMessages: IToastMessage[];
  };

  return (
    <ul className="toast-container">
      <AnimatePresence>
        {toastMessages.map((toast) => (
          <li key={toast.id}>
            <FadeInOut showY={20} hideX={-20}>
              <ToastItem
                id={toast.id}
                message={toast.message}
                type={toast.type}
              />
            </FadeInOut>
          </li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
