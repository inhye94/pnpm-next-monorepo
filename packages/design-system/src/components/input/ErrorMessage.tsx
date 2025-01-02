import { memo } from "react";

export interface IErrorMessageType {
  children?: React.ReactNode;
}

const ErrorMessage = memo(({ children }: IErrorMessageType) => {
  return <p className="mt-[0.4rem] text-negative text-[1.2rem]">{children}</p>;
});

export default ErrorMessage;
