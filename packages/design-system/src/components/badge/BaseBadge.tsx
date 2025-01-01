import classNames from "classnames";
import {
  BADGE_BASIC_STYLE,
  BADGE_COLOR_STYLE,
  BADGE_SHAPE_STYLE,
} from "./badge.styles";
import type { IBadgeProps } from "./badge";

const BaseBadge = ({
  variant = "fill",
  color = "primary",
  shape = "simple",
  children,
}: IBadgeProps) => {
  return (
    <strong
      className={classNames(
        BADGE_BASIC_STYLE,
        BADGE_COLOR_STYLE[color][variant],
        BADGE_SHAPE_STYLE[shape]
      )}
    >
      {children}
    </strong>
  );
};

export default BaseBadge;
