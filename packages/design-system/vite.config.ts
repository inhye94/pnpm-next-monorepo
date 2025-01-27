import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
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
