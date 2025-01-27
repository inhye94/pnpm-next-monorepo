import type {
  InputRadiusType,
  InputSizeType,
  InputValidationStateType,
} from "./input";

export const INPUT_BASE_STYLE = `
  w-full
  px-16
  bg-white
  text-16 leading-20 text-label-normal
  border border-gray-300
  placeholder-label-assistive
  outline-none
  transition-colors duration-200

  enabled:hover:border-primary enabled:focus:border-primary
  disabled:bg-coolNeutral-97 disabled:placeholder-disable disabled:cursor-not-allowed
`;

export const INPUT_SIZE_STYLE: Record<InputSizeType, string> = {
  sm: "h-30 px-12 py-5",
  md: "h-38 px-16 py-9",
  lg: "h-48 px-16 py-14",
};

export const INPUT_RADIUS_STYLE: Record<InputRadiusType, string> = {
  simple: "rounded-6",
  full: "rounded-full",
};

export const INPUT_VALIDATION_STATE_STYLE: Record<
  InputValidationStateType,
  string
> = {
  default: "enabled:focus:border-primary",
  valid: "border-positive",
  invalid: "border-negative",
};

// common
export const TITLE_STYLE = `block mb-4 text-12 font-semibold text-label-neutral`;
