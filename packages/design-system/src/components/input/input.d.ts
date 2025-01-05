export type InputAttrType = React.InputHTMLAttributes<HTMLInputElement>;

export type InputSizeType = "sm" | "md" | "lg";
export type InputRadiusType = "simple" | "full";
export type InputValidationStateType = "default" | "valid" | "invalid";

export interface IInputProps extends InputAttrType {
  size?: InputSizeType;
  radius?: InputRadiusType;
  validationState?: InputValidationStateType;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}
