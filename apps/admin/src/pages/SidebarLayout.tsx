import { Container } from "@workspace/design-system/components";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { sidebarMenus } from "../entity/menus";

export default function SidebarLayout() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Sidebar menus={sidebarMenus} />
        </div>

        <main className="md:col-span-3">
          <Outlet />
        </main>
      </div>
    </Container>
  );
}
