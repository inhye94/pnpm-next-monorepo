export type BadgeVariantType = "fill" | "soft";
export type BadgeShapeType = "simple" | "pill";
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
  children: React.ReactNode;
}
