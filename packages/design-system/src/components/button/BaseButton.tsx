import classNames from "classnames";
import type { IBaseButtonProps } from "./button";
import {
  BASE_BUTTON_STYLE,
  BUTTON_SIZE_STYLE,
  BUTTON_VARIANT_STYLE,
} from "./button.styles";

/**
 * BaseButton 컴포넌트
 *
 * @param {"filled" | "outlined" | "ghost"} variant button 스타일 종류
 * @param {"primary" | "secondary" | "assistive" | "success" | "error" | "warning" | "info"} color button 색상
 * @param {"small" | "medium" | "large"} size button 크기
 * @param {boolean} isLoading 로딩 여부
 * @param {string} className 외부 스타일 주입
 * @param {React.ReactNode} children button 내부 요소
 * @param {React.Ref<HTMLButtonElement>} ref button
 * @example <BaseButton>이런 버튼</BaseButton>
 * @example <BaseButton size="large" variant="outlined">저런 버튼</BaseButton>
 */

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
