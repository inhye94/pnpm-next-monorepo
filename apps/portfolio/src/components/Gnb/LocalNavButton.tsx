import type { ILocalNavMenu } from "@/providers/ScrollMenuProvider";
import classNames from "classnames";

// type
interface ILocalNavButton {
  menu: ILocalNavMenu;
  activeMenu: string | null;
  onClick: () => void;
}

// style
const BUTTON_STYLE = {
  default:
    "text-link-10 lg:text-link-16 lg:text-neutral-99 h-40 px-8 whitespace-nowrap text-neutral-50 capitalize opacity-70 transition-all hover:opacity-100 lg:min-w-100 lg:px-16 lg:font-light",
  active: "text-primary opacity-100 lg:font-normal",
};

// component
export default function LocalNavButton({
  menu,
  onClick,
  activeMenu,
}: ILocalNavButton) {
  return (
    <button
      className={classNames(
        BUTTON_STYLE.default,
        activeMenu === menu.id && BUTTON_STYLE.active,
      )}
      onClick={onClick}
    >
      <i
        className={classNames(
          "lg-hidden",
          "text-16 flex items-center justify-center text-center",
        )}
        aria-hidden
      >
        {menu.icon}
      </i>
      {menu.text}
    </button>
  );
}
