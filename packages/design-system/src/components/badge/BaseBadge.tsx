import classNames from "classnames";
import type { IBadgeProps } from "./badge";
import {
  BADGE_BASIC_STYLE,
  BADGE_COLOR_STYLE,
  BADGE_SHAPE_STYLE,
  BADGE_SIZE_STYLE,
} from "./badge.styles";

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
