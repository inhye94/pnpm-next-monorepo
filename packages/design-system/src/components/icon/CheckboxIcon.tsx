import { IoIosCheckbox } from "react-icons/io";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

export interface IIconProps {
  label?: string;
  variant?: "filled" | "outlined" | "ghost";
  className?: string;
}

const CheckBoxIcon = ({
  label = "",
  variant = "filled",
  className,
}: IIconProps) => {
  if (variant === "filled") {
    return <IoIosCheckbox aria-label={label} className={className} />;
  }

  if (variant === "outlined") {
    return <IoIosCheckboxOutline aria-label={label} className={className} />;
  }

  if (variant === "ghost") {
    return <IoIosCheckmark aria-label={label} className={className} />;
  }

  return null;
};

export default CheckBoxIcon;
