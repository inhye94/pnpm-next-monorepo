import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IIconProps } from "./icon";

export interface IRadioIconProps extends IIconProps {
  variant?: "filled" | "outlined";
}

const RadioIcon = ({
  label = "",
  variant = "filled",
  className,
}: IRadioIconProps) => {
  if (variant === "filled") {
    return <IoIosRadioButtonOn aria-label={label} className={className} />;
  }

  if (variant === "outlined") {
    return <IoIosRadioButtonOff aria-label={label} className={className} />;
  }

  return null;
};

export default RadioIcon;
