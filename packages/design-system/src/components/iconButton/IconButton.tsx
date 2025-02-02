import classNames from "classnames";
import type { ButtonAttr } from "../button/button";
import Icon, { IIconProps } from "../icon";

/**
 * IconButton 컴포넌트
 *
 * 특징:
 * 1. button의 기본 attr을 사용
 * 2. Icon 컴포넌트의 props 중, icon과 label을 넘겨줌
 *
 * @param {React.ComponentProps} icon Icon 컴포넌트의 name
 * @param {React.ComponentProps} label Icon 컴포넌트의 label
 * @param {boolean} float button의 float 스타일 여부
 * @param {string} variant button 스타일 종류
 * @param {string} className button에 주입할 스타일
 * @example <IconButton icon="close" label="닫기" float />
 */

// type
interface IIconButtonProps extends ButtonAttr {
  icon: IIconProps["name"];
  label: IIconProps["label"];
  float?: boolean;
  variant?: "outlined" | "ghost";
  className?: string;
}

// component
export default function IconButton({
  icon,
  label,
  float,
  variant = "outlined",
  className,
  ...props
}: IIconButtonProps) {
  return (
    <button
      className={classNames(
        "iconButton",
        float && "is-float",
        `is-${variant}`,
        className,
      )}
      {...props}
    >
      <Icon name={icon} label={label} />
    </button>
  );
}
