import { ComponentPropsWithoutRef } from "react";

export type ButtonVariantType = "filled" | "outlined" | "ghost";
export type ButtonSizeType = "small" | "medium" | "large";
export type ButtonColorType =
  | "primary"
  | "secondary"
  | "assistive"
  | "success"
  | "error"
  | "warning"
  | "info";

export interface IBaseButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}
