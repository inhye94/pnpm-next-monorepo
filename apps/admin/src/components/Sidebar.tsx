import classNames from "classnames";
import { NavLink } from "react-router";
import { IMenusType } from "../entity/menus";

interface ISidebarProps {
  menus: IMenusType[];
  className?: string;
}

export default function Sidebar({ menus, className }: ISidebarProps) {
  return (
    <nav className={className}>
      <h2 className="visually-hidden">메뉴</h2>

      <ul className="flex flex-col gap-8">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className="bg-background-gray hover:bg-background-darkgray group overflow-hidden rounded-full transition-colors"
          >
            <NavLink
              to={`/${menu.path}`}
              className={({ isActive }) =>
                classNames(
                  "text-16 hover:text-neutral-10 inline-block w-full px-16 py-8 font-semibold capitalize transition-all group-hover:translate-x-4",
                  isActive ? "text-neutral-10" : "text-neutral-50",
                )
              }
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
