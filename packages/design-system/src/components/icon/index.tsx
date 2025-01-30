import { Suspense } from "react";
import { iconMap } from "./iconMap";

// type
interface IIconProps {
  name: keyof typeof iconMap;
  label?: string;
  className?: string;
}

export default function Icon({ name, label, className }: IIconProps) {
  const LazyIcon = iconMap[name];

  return (
    <Suspense fallback={<span className={className}></span>}>
      <LazyIcon aria-label={label} className={className} />
    </Suspense>
  );
}
