import type {
  ButtonColorType,
  ButtonSizeType,
  ButtonVariantType,
} from "./button";

export const BASE_BUTTON_STYLE = `
  relative
  flex
  items-center
  justify-center
  shrink-0
  gap-x-6
  font-bold
  transition-colors
  overflow-hidden

  enabled:active:translate-y-2
  enabled:active:transition-transform
`;

export const BUTTON_SIZE_STYLE: Record<ButtonSizeType, string> = {
  large: "h-48 px-24 rounded-base text-button-lg",
  medium: "h-40 px-20 rounded-8 text-button-md",
  small: "h-32 px-14 rounded-6 text-button-sm",
};

export const BUTTON_VARIANT_STYLE: Record<
  ButtonVariantType,
  Record<ButtonColorType, string>
> = {
  filled: {
    primary: `
      bg-primary text-white 
      enabled:hover:bg-primary-strong
      enabled:active:bg-primary-heavy
      disabled:bg-gray-100
      disabled:text-label-assistive
      disabled:cursor-not-allowed
    `,
    secondary: "",
    assistive: "",
    success: "",
    error: "",
    warning: "",
    info: "",
  },
  outlined: {
    primary: `
      border-solid
      border
      border-primary
      text-primary
      enabled:hover:bg-blue-100
      enabled:active:bg-blue-200
      disabled:border-gray-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    secondary: `
      border-solid
      border
      border-secondary
      text-primary
      enabled:hover:bg-gray-100
      enabled:active:bg-gray-200
      disabled:border-gray-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    assistive: `
      border-solid
      border
      border-secondary
      text-label-normal
      enabled:hover:bg-gray-100
      enabled:active:bg-gray-200
      disabled:border-gray-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    success: "",
    error: "",
    warning: "",
    info: "",
  },
  ghost: {
    primary: `
      text-primary
      enabled:hover:bg-blue-100
      enabled:active:bg-blue-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    secondary: "",
    assistive: `
      text-label-alternative
      enabled:hover:bg-gray-100
      enabled:active:bg-gray-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    success: `
      text-positive
      enabled:hover:bg-green-100
      enabled:active:bg-green-200  
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    error: `
      text-negative
      enabled:hover:bg-red-100
      enabled:active:bg-red-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    warning: `
      text-cautionary
      enabled:hover:bg-yellow-100
      enabled:active:bg-yellow-200
      disabled:text-label-disable
      disabled:cursor-not-allowed
    `,
    info: "",
  },
};
