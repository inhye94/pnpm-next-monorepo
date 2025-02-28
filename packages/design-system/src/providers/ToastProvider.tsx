"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import type { IToastContext, IToastMessage } from "../components/toast/toast";

/**
 * ToastProvider 컴포넌트, useToastContext
 *
 * 특징:
 * 1. 관심사 분리: toast 관련된 state와 동작을 분리
 * 2. 파일 관리: 동일 관심사라서 하나의 파일로 관리
 */

const ToastContext = createContext<IToastContext | null>(null);

// provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMessages, setToastMessages] = useState<IToastMessage[]>([]);
  const timeoutIds = useRef(new Set<NodeJS.Timeout>());

  useEffect(() => {
    const timeoutIdsCopy = timeoutIds.current;
    return () => {
      timeoutIdsCopy.forEach((id) => clearTimeout(id)); // 언마운트 후 모든 콜백을 큐에서 제거
    };
  }, []);

  const removeToast = useCallback((id: string) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: IToastMessage["type"]) => {
      // 동일한 메세지를 가진 토스트가 있는 경우
      if (toastMessages.some((toast) => toast.message === message)) return;

      const id = uuidv4();
      setToastMessages((prev) => [...prev, { id, message, type }]);

      const timeoutId = setTimeout(() => {
        removeToast(id);
        timeoutIds.current.delete(timeoutId); // 타이머 제거
      }, 1000 * 3);

      timeoutIds.current.add(timeoutId); // 타이머 추가
    },
    [toastMessages, removeToast],
  );

  return (
    <ToastContext.Provider value={{ toastMessages, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

// context
export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToastMessageContext must be used within ToastProvider");
  }

  return context;
};
