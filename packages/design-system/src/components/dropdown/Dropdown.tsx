import classNames from "classnames";
import { DropdownMenu } from "radix-ui";

/**
 * Dropdown 컴포넌트
 *
 * 특징:
 * 1. 웹 접근성 개선: radix-ui의 DropdownMenu를 커스텀
 * 2. CCP 패턴으로, 내부 구조를 자유롭게 구성할 수 있습니다.
 *
 * Dropdown parameter
 * @param {string} className 외부 스타일 주입
 * @param {React.ReactNode} trigger dropdown을 여닫는 요소
 * @param {React.ReactNode} children dropdown body
 *
 * DropdownItem parameter
 * @param {string} className 외부 스타일 주입
 * @param {React.ReactNode} children dropdownItem의 contents
 * 
 * @example
<Dropdown trigger={<IconButton icon="velog" label="velog" />}>
  {links.blog.map((blogLink) => (
    <Dropdown.Item key={blogLink.id}>
      <ProjectLinkItem
        icon="velog"
        text={blogLink.title}
        href={blogLink.content}
      />
    </Dropdown.Item>
  ))}
</Dropdown>
 */

interface IDropdownProps {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

interface IDropDownItemProps {
  className?: string;
  children: React.ReactNode;
}

export default function Dropdown({
  className,
  trigger,
  children,
}: IDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={classNames("dropdown", className)}
          sideOffset={5}
        >
          {children}
          <DropdownMenu.Arrow className="dropdown-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function DropdownItem({ className, children }: IDropDownItemProps) {
  return (
    <DropdownMenu.Item
      className={classNames("dropdown-item", className)}
      asChild
    >
      {children}
    </DropdownMenu.Item>
  );
}

Dropdown.Item = DropdownItem;
