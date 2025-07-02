import { ComponentPropsWithoutRef } from "react";

export type InputSizeType = "sm" | "md" | "lg";
export type InputRadiusType = "simple" | "full";
export type InputValidationStateType = "default" | "valid" | "invalid";

export interface IInputProps extends ComponentPropsWithoutRef<"input"> {
  size?: InputSizeType;
  radius?: InputRadiusType;
  validationState?: InputValidationStateType;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}
