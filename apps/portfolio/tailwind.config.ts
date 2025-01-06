import type { Config } from "tailwindcss";

import designSystemConfig from "@workspace/design-system/tailwind.config.ts";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@workspace/design-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [designSystemConfig],
} satisfies Config;
