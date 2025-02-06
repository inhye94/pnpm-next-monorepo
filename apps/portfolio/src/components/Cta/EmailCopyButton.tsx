"use client";

import { ADDRESS_EMAIL } from "@/feature/about/constants";
import { IconButton } from "@workspace/design-system/components";
import { useToastContext } from "@workspace/design-system/providers";
import { useCallback } from "react";

export default function EmailCopyButton() {
  const { showToast } = useToastContext();

  const copyEmailAndToast = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS_EMAIL).then(() => {
        showToast("이메일 주소가 복사되었습니다.", "info");
      });
    } catch (err) {
      showToast(`복사 실패: ${err}`, "error");
    }
  }, []);

  return (
    <IconButton
      icon="email"
      label="이메일 클립복사"
      onClick={copyEmailAndToast}
      float
    />
  );
}
