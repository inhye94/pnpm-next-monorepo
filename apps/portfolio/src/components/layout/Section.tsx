"use client";

import { Container } from "@workspace/design-system/components";
import classNames from "classnames";
import { HTMLAttributes } from "react";

/**
 * Section 컴포넌트
 *
 * 특징:
 * 1. div의 attribute를 그대로 상속
 * 2. 페이지의 큰 덩어리를 나타내는 section이고, h2를 가진다.
 *
 * @param {string} title section의 제목
 * @param {string} className 외부 스타일 주입
 * @param {React.ReactNode} children section 내부 요소
 * @param {boolean} hideTitle title 보임/숨김
 */

// type
export type SectionAttr = HTMLAttributes<HTMLDivElement>;

interface ISectionProps extends SectionAttr {
  title: string;
  className?: string;
  children: React.ReactNode;
  hideTitle?: boolean;
}

// component
export default function Section({
  title,
  className,
  children,
  hideTitle,
  ...props
}: ISectionProps) {
  return (
    <section className={classNames("py-24 lg:py-48", className)} {...props}>
      <Container>
        <h2
          className={classNames(
            "text-heading-3 mb-12",
            hideTitle && "visually-hidden",
          )}
        >
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
