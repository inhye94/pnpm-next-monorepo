import Sidebar from "@/components/Sidebar";
import { Container } from "@workspace/design-system/components";

export default async function SidebarLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}>) {
  const id = (await params).id;
  return (
    <main>
      <Container>
        <div className="grid gap-24 md:grid-cols-4 md:py-34">
          <div className="md:col-span-1">
            <Sidebar id={id} />
          </div>

          <div className="md:col-span-3">{children}</div>
        </div>
      </Container>
    </main>
  );
}
