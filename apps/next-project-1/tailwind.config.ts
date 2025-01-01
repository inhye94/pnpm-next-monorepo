import designSystemConfig from "@workspace/design-system/tailwind.config";

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@workspace/design-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ...designSystemConfig.theme.extend, // 디자인 시스템의 테마 확장
    },
  },
  plugins: designSystemConfig.plugins, // 디자인 시스템 플러그인 통합
};
