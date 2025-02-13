import classNames from "classnames";
import { memo } from "react";

/**
 * ErrorMessage 컴포넌트
 *
 * @param {string} className 외부 스타일 주입
 * @param {React.ReactNode} children 에러 메세지
 */

export interface IErrorMessageType {
  className?: string;
  children?: React.ReactNode;
}

const ErrorMessage = memo(function ErrorMessage({
  className,
  children,
}: IErrorMessageType) {
  return (
    <p className={classNames("text-negative text-12 mt-4", className)}>
      {children}
    </p>
  );
});

export default ErrorMessage;
