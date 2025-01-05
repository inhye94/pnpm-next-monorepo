import classNames from "classnames";
import type { IBaseButtonProps } from "./button";
import {
  BASE_BUTTON_STYLE,
  BUTTON_SIZE_STYLE,
  BUTTON_VARIANT_STYLE,
} from "./button.styles";

const BaseButton = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  isLoading,
  className,
  children,
  ref,
  ...props
}: IBaseButtonProps) => {
  return (
    <button
      ref={ref}
      className={classNames(
        BASE_BUTTON_STYLE,
        BUTTON_SIZE_STYLE[size],
        BUTTON_VARIANT_STYLE[variant][color],
        isLoading && "cursor-wait",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
BaseButton.displayName = "BaseButton";

export default BaseButton;
