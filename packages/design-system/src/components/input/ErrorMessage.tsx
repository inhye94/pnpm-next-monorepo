import classNames from "classnames";
import { memo } from "react";

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
