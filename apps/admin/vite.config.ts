import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

// NOTE: Vite 프로젝트마다 env 설정 추가
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "../../.env.production"
      : "../../.env",
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
