import classNames from "classnames";
import { AnchorHTMLAttributes } from "react";
import Icon, { IIconProps } from "../icon";

/**
 * IconLink 컴포넌트
 *
 * 특징:
 * 1. ancher의 기본 attr을 사용
 * 2. Icon 컴포넌트의 props 중, icon과 label을 넘겨줌
 * 3. 새창에서 열림
 *
 * @param {React.ComponentProps} icon Icon 컴포넌트의 name
 * @param {React.ComponentProps} label Icon 컴포넌트의 label
 * @param {boolean} float button의 float 스타일 여부
 * @param {string} variant button 스타일 종류
 * @param {string} className button에 주입할 스타일
 * @example <IconLink herf="주소" icon="close" label="닫기" float />
 */

type LinkAttr = AnchorHTMLAttributes<HTMLAnchorElement>;

interface IIconLinkProps extends LinkAttr {
  icon: IIconProps["name"];
  label: IIconProps["label"];
  float?: boolean;
  variant?: "outlined" | "ghost";
  className?: string;
}

export default function IconLink({
  icon,
  label,
  float,
  variant = "outlined",
  className,
  ...props
}: IIconLinkProps) {
  return (
    <a
      target="_blank"
      className={classNames(
        "iconButton",
        float && "is-float",
        `is-${variant}`,
        className,
      )}
      {...props}
    >
      <Icon name={icon} label={label} />
    </a>
  );
}
