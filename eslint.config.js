import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat 설정 (Next.js 호환)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js 전용 설정
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Vite 및 공통 JavaScript/TypeScript 설정
  {
    ignores: [
      "dist",
      "node_modules",
      "public",
      "coverage",
      "pnpm-lock.yaml",
      "pnpm-workspace.yaml",
    ],
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // JavaScript 및 TypeScript 권장 규칙
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,

      // React 및 React Hooks 규칙
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // 프로젝트 공통 규칙 추가
      "no-unused-vars": ["warn", { vars: "all", args: "after-used" }],
      "no-console": "warn",
    },
  },
];
