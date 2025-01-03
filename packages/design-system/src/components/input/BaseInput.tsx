import { forwardRef, memo } from "react";
import classNames from "classnames";
import {
  INPUT_BASE_STYLE,
  INPUT_RADIUS_STYLE,
  INPUT_SIZE_STYLE,
  INPUT_VALIDATION_STATE_STYLE,
} from "./input.styles";
import type { IInputProps } from "./input";

const BaseInput = memo(
  forwardRef<HTMLInputElement, IInputProps>(
    (
      {
        size = "md",
        radius = "simple",
        validationState = "default",
        className,
        ...props
      },
      ref
    ) => {
      return (
        <input
          ref={ref}
          type="text"
          className={classNames(
            INPUT_BASE_STYLE,
            INPUT_SIZE_STYLE[size],
            INPUT_RADIUS_STYLE[radius],
            INPUT_VALIDATION_STATE_STYLE[validationState],
            className
          )}
          {...props}
        />
      );
    }
  )
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
