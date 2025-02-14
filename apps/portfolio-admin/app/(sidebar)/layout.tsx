import Sidebar from "@/components/Sidebar";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
