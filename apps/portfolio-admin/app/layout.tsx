import Gnb from "@/components/Gnb";
import Providers from "@/providers";
import { ToastContainer } from "@workspace/design-system/components";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Admin",
  description: "포트폴리오 데이터 수정을 위한 어드민",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Gnb />
          <main>{children}</main>

          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
