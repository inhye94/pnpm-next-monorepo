import { ToastProvider } from "@workspace/design-system/providers";
import { QueryProvider } from "./QueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ToastProvider>{children}</ToastProvider>
    </QueryProvider>
  );
}
