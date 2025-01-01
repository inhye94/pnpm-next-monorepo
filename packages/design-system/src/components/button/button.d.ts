export type ButtonAttr = React.ButtonHTMLAttributes<HTMLButtonElement>;

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

export interface IBaseButtonProps extends ButtonAttr {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}
