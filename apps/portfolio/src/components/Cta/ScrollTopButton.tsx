"use client";

import { IconButton } from "@workspace/design-system/components";
import { useCallback } from "react";

export default function ScrollTopButton() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <IconButton
      icon="doubleArrow"
      label="맨 위로 이동"
      className="transition-transform"
      onClick={scrollToTop}
      float
    />
  );
}
