export interface IMenusType {
  id: string;
  title: string;
  path: string;
}

// 사이드바
export const sidebarMenus: IMenusType[] = [
  { id: "menu-1", title: "career", path: "career" },
  { id: "menu-2", title: "project", path: "project" },
  { id: "menu-3", title: "skill", path: "skill" },
  { id: "menu-4", title: "stack", path: "stack" },
];
