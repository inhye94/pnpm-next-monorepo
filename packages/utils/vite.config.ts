import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Utils",
      fileName: (format) => `utils.${format}.js`,
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
