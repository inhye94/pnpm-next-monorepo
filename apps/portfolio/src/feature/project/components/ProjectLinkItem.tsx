import { Icon } from "@workspace/design-system/components";
import { IIconProps } from "node_modules/@workspace/design-system/src/components/icon";
import { ComponentPropsWithRef } from "react";

/**
 * ProjectLinkItem 컴포넌트
 *
 * 특징:
 * 1. anchor 태그의 모든 attribute를 상속
 *
 * @param {React.ComponentProps} icon Icon 컴포넌트의 name
 * @param {string} text 화면에 출력되는 링크 문구
 * @param {string} className 외부 스타일 주입
 */

// type
interface IProjectLinkItemProps extends ComponentPropsWithRef<"a"> {
  icon: IIconProps["name"];
  text: string;
  className?: string;
}

// component
export default function ProjectLinkItem({
  icon,
  text,
  className,
  ...props
}: IProjectLinkItemProps) {
  return (
    <a className={className} target="_blank" {...props}>
      <Icon name={icon} className="text-20 shrink-0" />
      <span className="truncate">{text}</span>
    </a>
  );
}
