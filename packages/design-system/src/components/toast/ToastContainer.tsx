"use client";

import { useToastContext } from "../../providers/ToastProvider";
import ToastItem from "./ToastItem";

export default function ToastContainer() {
  const { toastMessages } = useToastContext();

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
