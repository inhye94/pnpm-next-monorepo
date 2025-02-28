"use client";

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
      {toastMessages.map((toast) => (
        <li key={toast.id}>
          <ToastItem id={toast.id} message={toast.message} type={toast.type} />
        </li>
      ))}
    </ul>
  );
}
