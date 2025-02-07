"use client";

import { ToastProvider } from "@workspace/design-system/providers";
import { ScrollMenuProvider } from "./ScrollMenuProvider";

/**
 * 전역 Provider 관리 컴포넌트
 *
 * 특징:
 * 1. 관심사 분리: 각 Provider를 독립적인 파일로 관리
 * 2. 순서 보장: Provider 중첩 순서가 중요한 경우 고려
 * 3. 단일 진실 공급원: 모든 Provider를 한 곳에서 관리
 *
 * Provider 순서:
 * 1. ToastMessageProvider (알림)
 * 2. ScrollMenuProvider (메뉴)
 */

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <ScrollMenuProvider>{children}</ScrollMenuProvider>
    </ToastProvider>
  );
}
