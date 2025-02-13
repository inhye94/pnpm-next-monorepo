import classNames from "classnames";
import type { IBadgeProps } from "./badge";
import {
  BADGE_BASIC_STYLE,
  BADGE_COLOR_STYLE,
  BADGE_SHAPE_STYLE,
  BADGE_SIZE_STYLE,
} from "./badge.styles";

/**
 * BaseBadge 컴포넌트
 *
 * @param {"fill" | "soft"} variant badge 스타일 종류
 * @param {"primary" | "success" | "error" | "warning" | "dark" | "light"} color badge 색상
 * @param {"sm" | "md" | "lg"} size badge 크기
 * @param {"simple" | "pill"} shape badge 모양
 * @param {React.ReactNode} children button
 * @example <BaseBadge>보통 뱃지</BaseBadge>
 * @example <BaseBadge size="lg" variant="soft" shape="pill">알약 모양 뱃지</BaseBadge>
 */

const BaseBadge = ({
  variant = "fill",
  color = "primary",
  shape = "simple",
  size = "sm",
  children,
}: IBadgeProps) => {
  return (
    <strong
      className={classNames(
        BADGE_BASIC_STYLE,
        BADGE_COLOR_STYLE[color][variant],
        BADGE_SHAPE_STYLE[shape],
        BADGE_SIZE_STYLE[size],
      )}
    >
      {children}
    </strong>
  );
};

export default BaseBadge;
