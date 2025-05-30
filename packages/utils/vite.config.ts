import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  define: { "process.env": process.env },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "Utils",
      fileName: (format) => `utils.${format}.js`,
    },
    rollupOptions: {
      // 외부 모듈 처리
      external: ["firebase/app", "firebase/auth", "firebase/firestore"], // 외부 라이브러리 번들 제외
      output: {
        globals: {
          "firebase/app": "firebase",
          "firebase/auth": "firebase",
          "firebase/firestore": "firebase",
        },
      },
    },
  },
});
