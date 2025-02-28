"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { IModalContext } from "../components/modal/modal";

/**
 * Modal Provider
 *
 * 특징:
 * 1. 공유할 상태가 단순해서 Context로 구현
 * 2. 모달 열기/닫기 함수, 모달 상태, 키보드 이벤트(esc로 모달 닫기)
 * 3. Context 사용: useModalContext
 */

// provider
const ModalContext = createContext<IModalContext | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);

  const escapeByKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  // 키 닫힘 이벤트
  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("keydown", escapeByKey);

      return () => {
        document.body.removeEventListener("keydown", escapeByKey);
      };
    }
  }, [isOpen, escapeByKey]);

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// context
export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }

  return context;
};
