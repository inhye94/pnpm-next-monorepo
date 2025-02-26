"use client";

import classNames from "classnames";
import Link from "next/link";
import { useCallback, useState } from "react";

// data
const menus: { id: string; title: string; path: string }[] = [
  { id: "menu1", title: "career", path: "career" },
  { id: "menu2", title: "project", path: "project" },
  { id: "menu3", title: "skill", path: "skill" },
];

// component
export default function Sidebar() {
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);

  const handleMenuClick = useCallback((id: string) => {
    setCurrentMenu(id);
  }, []);

  return (
    <nav>
      <h2 className="visually-hidden">메뉴</h2>

      <ul className="flex flex-col gap-8">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className="bg-background-gray hover:bg-background-darkgray group overflow-hidden rounded-full transition-colors"
          >
            <Link
              href={`/${menu.path}`}
              className={classNames(
                "text-16 hover:text-neutral-10 inline-block w-full px-16 py-8 font-semibold capitalize transition-all group-hover:translate-x-4",
                currentMenu === menu.id ? "text-neutral-10" : "text-neutral-50",
              )}
              onClick={() => handleMenuClick(menu.id)}
            >
              {menu.title} detail
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
