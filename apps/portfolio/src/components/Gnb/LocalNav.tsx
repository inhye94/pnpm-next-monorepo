"use client";

import { Icon } from "@workspace/design-system/components";
import { useState } from "react";
import LocalNavButton from "./LocalNavButton";

/**
 * LocalNav의 반응형
 * 모바일 > 하단에 위치
 * 데스크탑 > 상단에 위치
 */

// type
export interface ILocalNavMenu {
  id: string;
  text: string;
  icon: React.ReactNode;
}

export type ActiveMenuType = string | null;

// data
const localNavMenu: ILocalNavMenu[] = [
  {
    id: "localnav-1",
    text: "about",
    icon: <Icon name="rocket" />,
  },
  {
    id: "localnav-2",
    text: "skill",
    icon: <Icon name="tool" />,
  },
  {
    id: "localnav-3",
    text: "link",
    icon: <Icon name="link" />,
  },
  {
    id: "localnav-4",
    text: "project",
    icon: <Icon name="folder" />,
  },
  {
    id: "localnav-5",
    text: "career",
    icon: <Icon name="company" />,
  },
];

// component
export default function LocalNav() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);

  const clickMenuHandler = (id: string) => {
    setActiveMenu(id);
  };

  return (
    <nav className="border-border z-gnb fixed bottom-0 left-0 w-full border-t bg-white lg:static lg:w-auto lg:border-none lg:bg-transparent">
      <h3 className="visually-hidden">사이드 메뉴</h3>

      <ul className="flex items-center justify-evenly lg:inline-flex">
        {localNavMenu.map((menu) => (
          <li key={menu.id}>
            <LocalNavButton
              menu={menu}
              onClick={() => clickMenuHandler(menu.id)}
              activeMenu={activeMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
