import Sidebar from "@/components/Sidebar";
import { Container } from "@workspace/design-system/components";

export default async function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container>
        <div className="grid gap-24 md:grid-cols-4 md:py-34">
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          <div className="md:col-span-3">{children}</div>
        </div>
      </Container>
    </main>
  );
}
