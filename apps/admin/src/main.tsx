import { ToastContainer } from "@workspace/design-system/components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./pages/routes.tsx";
import Providers from "./providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <ToastContainer />
    </Providers>
  </StrictMode>,
);
