import { ToastProvider } from "@workspace/design-system/providers";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
