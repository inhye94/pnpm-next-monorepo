import classNames from "classnames";
import type { IInputProps } from "./input";
import {
  INPUT_BASE_STYLE,
  INPUT_RADIUS_STYLE,
  INPUT_SIZE_STYLE,
  INPUT_VALIDATION_STATE_STYLE,
} from "./input.styles";

/**
 * BaseInput 컴포넌트
 *
 * @param {"sm" | "md" | "lg"} size 크기
 * @param {"simple" | "full"} radius 모서리
 * @param {"default" | "valid" | "invalid"} validationState 유효성 검사 상태
 * @param {string} className 외부 스타일 주입
 */

const BaseInput = ({
  size = "md",
  radius = "simple",
  validationState = "default",
  className,
  ref,
  ...props
}: IInputProps) => {
  return (
    <input
      ref={ref}
      type="text"
      className={classNames(
        INPUT_BASE_STYLE,
        INPUT_SIZE_STYLE[size],
        INPUT_RADIUS_STYLE[radius],
        INPUT_VALIDATION_STATE_STYLE[validationState],
        className,
      )}
      {...props}
    />
  );
};
BaseInput.displayName = "BaseInput";

export default BaseInput;
