import classNames from "classnames";
import { memo } from "react";

export interface IErrorMessageType {
  className?: string;
  children?: React.ReactNode;
}

const ErrorMessage = memo(({ className, children }: IErrorMessageType) => {
  return (
    <p
      className={classNames(
        "mt-[0.4rem] text-negative text-[1.2rem]",
        className,
      )}
    >
      {children}
    </p>
  );
});

export default ErrorMessage;
