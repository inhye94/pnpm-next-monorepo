import { Suspense } from "react";
import { iconMap } from "./iconMap";

/**
 * Icon 컴포넌트
 *
 * 특징:
 * 1. 신규 아이콘 등록은 무조건 iconMap에 합니다.
 *
 * @param {string} name Icon 종류
 * @param {React.ComponentProps} label aria-label 값
 * @param {string} className 외부 스타일 주입
 * @example <Icon name="close" label="닫기" />
 */

// type
export interface IIconProps {
  name: keyof typeof iconMap;
  label?: string;
  className?: string;
}

export default function Icon({ name, label, className }: IIconProps) {
  const LazyIcon = iconMap[name];

  return (
    <Suspense fallback={<span className={className}></span>}>
      <LazyIcon aria-label={label} className={className} />
    </Suspense>
  );
}
