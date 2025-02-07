"use client";

import { useScrollMenuContext } from "@/providers/ScrollMenuProvider";
import { useCallback } from "react";
import LocalNavButton from "./LocalNavButton";

/**
 * LocalNav의 반응형
 * 모바일 > 하단에 위치
 * 데스크탑 > 상단에 위치
 */

// component
export default function LocalNav() {
  const { menus, scrollToTarget, activeMenu } = useScrollMenuContext();

  const clickMenuHandler = useCallback((id: string) => {
    scrollToTarget(id);
  }, []);

  return (
    <nav className="border-border z-gnb fixed bottom-0 left-0 w-full border-t bg-white lg:static lg:w-auto lg:border-none lg:bg-transparent">
      <h3 className="visually-hidden">사이드 메뉴</h3>

      <ul className="flex items-center justify-evenly lg:inline-flex">
        {menus.map((menu) => (
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
