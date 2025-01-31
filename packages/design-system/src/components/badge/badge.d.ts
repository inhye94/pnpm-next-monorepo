export type BadgeVariantType = "fill" | "soft";
export type BadgeShapeType = "simple" | "pill";
export type BadgeSizeType = "sm" | "md" | "lg";
export type BadgeColorType =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "dark"
  | "light";

export interface IBadgeProps {
  variant?: BadgeVariantType;
  shape?: BadgeShapeType;
  color?: BadgeColorType;
  size?: BadgeSizeType;
  children: React.ReactNode;
}
