import classNames from "classnames";
import {
  BASE_BUTTON_STYLE,
  BUTTON_SIZE_STYLE,
  BUTTON_VARIANT_STYLE,
} from "./button.styles";
import { IBaseButtonProps } from "./button";

const BaseButton = ({
  variant = "filled",
  color = "primary",
  size = "medium",
  isLoading,
  className,
  children,
  ...props
}: IBaseButtonProps) => {
  return (
    <button
      className={classNames(
        BASE_BUTTON_STYLE,
        BUTTON_SIZE_STYLE[size],
        BUTTON_VARIANT_STYLE[variant][color],
        isLoading && "cursor-wait",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
