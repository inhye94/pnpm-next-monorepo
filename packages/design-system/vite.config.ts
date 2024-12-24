import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "DesignSystem",
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      // 외부 모듈 처리
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
