import Finish from "@/shared/components/Finish";
import Gnb from "@/shared/components/Gnb";
import Navbar from "@/shared/components/Navbar";
import "@workspace/design-system/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Gnb />
        <Navbar />
        <aside>이메일 클립복사, 피드백 주기, 맨 위로 이동</aside>

        <main className="max-w-[1200px]">{children}</main>

        <Finish />
      </body>
    </html>
  );
}
