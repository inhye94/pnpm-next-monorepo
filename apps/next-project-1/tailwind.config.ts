import designSystemConfig from "@workspace/design-system/tailwind.config.ts";

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@workspace/design-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [designSystemConfig],
};
