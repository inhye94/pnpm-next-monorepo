import type {
  BadgeColorType,
  BadgeShapeType,
  BadgeSizeType,
  BadgeVariantType,
} from "./badge";

export const BADGE_BASIC_STYLE = `
  inline-flex
  items-center
  justify-center
  gap-4
  font-normal
`;

export const BADGE_COLOR_STYLE: Record<
  BadgeColorType,
  Record<BadgeVariantType, string>
> = {
  primary: {
    fill: "bg-primary text-white",
    soft: "bg-blue-95 text-primary",
  },
  success: {
    fill: "bg-positive text-white",
    soft: "bg-green-95 text-green-30",
  },
  error: {
    fill: "bg-negative text-white",
    soft: "bg-red-95 text-red-30",
  },
  warning: {
    fill: "bg-cautionary text-white",
    soft: "bg-yellow-100 text-yellow-700",
  },
  dark: {
    fill: "bg-neutral-30 text-white",
    soft: "bg-neutral-90 text-neutral-30",
  },
  light: {
    fill: "bg-neutral-95 text-neutral-30",
    soft: "bg-neutral-99 text-neutral-50",
  },
};

export const BADGE_SHAPE_STYLE: Record<BadgeShapeType, string> = {
  simple: "rounded-4",
  pill: "rounded-full",
};

export const BADGE_SIZE_STYLE: Record<BadgeSizeType, string> = {
  sm: "h-20 px-8 text-10",
  md: "h-28 px-12 py-4 text-12",
  lg: "h-36 px-16 py-6 text-14",
};
