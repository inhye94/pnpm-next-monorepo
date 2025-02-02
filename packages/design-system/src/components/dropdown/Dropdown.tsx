import classNames from "classnames";
import { DropdownMenu } from "radix-ui";

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
