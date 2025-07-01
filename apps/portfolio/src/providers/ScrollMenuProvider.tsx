import { GNB_HEIGHT } from "@/components/Gnb/constants";
import { Icon } from "@workspace/design-system/components";
import { iconMap } from "@workspace/utils/shared";
import {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// type
export interface ILocalNavMenu {
  id: string;
  text: string;
  icon: React.ReactNode;
  target: RefObject<HTMLDivElement | null>;
  isActive: boolean;
}

interface IScrollMenuContext {
  activeMenu: string | null;
  menus: ILocalNavMenu[];
  getTargetRef: (id: string) => RefObject<HTMLDivElement | null> | null;
  scrollToTarget: (id: string) => void;
}

// context
const ScrollMenuContext = createContext<IScrollMenuContext>(
  {} as IScrollMenuContext,
);

export function ScrollMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 메뉴 ref
  const menusRef = useRef<Record<string, RefObject<HTMLDivElement | null>>>({
    skill: useRef<HTMLDivElement | null>(null),
    link: useRef<HTMLDivElement | null>(null),
    project: useRef<HTMLDivElement | null>(null),
    career: useRef<HTMLDivElement | null>(null),
  });

  const icons = useRef<Record<string, keyof typeof iconMap>>({
    project: "folder",
    career: "company",
    link: "link",
    skill: "tool",
  });

  // 메뉴
  const [menus, setMenus] = useState<IScrollMenuContext["menus"]>(
    Object.keys(menusRef.current).map((id) => ({
      id,
      text: id,
      icon: <Icon name={icons.current[id]} />,
      target: menusRef.current[id],
      isActive: false,
    })),
  );

  // 타겟 찾기
  const getTargetRef = (
    id: string,
  ): RefObject<HTMLDivElement | null> | null => {
    return menusRef.current[id] ?? null;
  };

  // 스크롤 이동
  const scrollToTarget = (id: string) => {
    const targetRef = getTargetRef(id);

    if (!targetRef || !targetRef.current) {
      console.log(`[ScrollMenu] ID "${id}"에 해당하는 요소가 없습니다.`);
      return;
    }

    window.scrollTo({
      top: targetRef.current.offsetTop - GNB_HEIGHT,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 메뉴 활성화
    const handleMenuActive = () => {
      setMenus((prevMenus) => {
        let updated = false;

        const newMenus = prevMenus.map((menu) => {
          const target = getTargetRef(menu.id);

          if (target?.current) {
            // viewport 내부에 있으면 isActive 업데이트
            const rect = target.current.getBoundingClientRect();
            const isActive =
              rect.top <= GNB_HEIGHT && rect.bottom > GNB_HEIGHT + 5;

            if (menu.isActive !== isActive) {
              updated = true;
              setActiveMenu(menu.id);
              return { ...menu, isActive };
            }
          }

          return menu;
        });

        return updated ? newMenus : prevMenus; // ✅ 변경이 있을 때만 상태 업데이트
      });
    };

    window.addEventListener("scroll", handleMenuActive);
    return () => window.removeEventListener("scroll", handleMenuActive);
  }, []);

  return (
    <ScrollMenuContext.Provider
      value={{ activeMenu, menus: menus, scrollToTarget, getTargetRef }}
    >
      {children}
    </ScrollMenuContext.Provider>
  );
}

export const useScrollMenuContext = () => {
  const context = useContext(ScrollMenuContext);

  if (!context) {
    throw new Error(
      "useScrollMenuContext must be used within ScrollMenuProvider",
    );
  }

  return context;
};
