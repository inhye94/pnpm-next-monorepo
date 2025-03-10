import Sidebar from "@/components/Sidebar";
import { Container } from "@workspace/design-system/components";

export default async function SidebarLayout({
  tabs,
}: Readonly<{
  tabs: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="grid gap-24 md:grid-cols-4 md:py-34">
        <div className="md:col-span-1">
          <Sidebar />
        </div>

        <div className="md:col-span-3">{tabs}</div>
      </div>
    </Container>
  );
}
