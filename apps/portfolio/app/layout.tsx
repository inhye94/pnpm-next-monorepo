import Cta from "@/components/Cta/Cta";
import Finish from "@/components/Finish";
import Gnb from "@/components/Gnb/Gnb";
import ProgressBar from "@/components/ProgressBar";
import Providers from "@/providers";
import { ToastContainer } from "@workspace/design-system/components";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Inhye's Portfolio",
  description: "2년차 프론트엔드 개발자 박인혜의 포트폴리오",
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
          <ProgressBar />
          <main>{children}</main>
          <Cta />
          <Finish />

          <ToastContainer />
          <div id="modal-root"></div>
        </Providers>
      </body>
    </html>
  );
}
