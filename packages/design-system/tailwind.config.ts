import type { Config } from "tailwindcss";
import { colorThemes } from "./src/styles/variables/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        // Base font size for rem calculations
        root: "10px",
        // Headings
        "heading-1": [
          "6.4rem",
          { lineHeight: "8rem", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-2": [
          "4.8rem",
          { lineHeight: "5.6rem", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-3": [
          "3.2rem",
          { lineHeight: "4rem", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-4": [
          "2.4rem",
          {
            lineHeight: "3.2rem",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        "heading-5": [
          "2rem",
          {
            lineHeight: "2.4rem",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        "heading-6": [
          "1.6rem",
          {
            lineHeight: "2.4rem",
            letterSpacing: "-0.015em",
            fontWeight: "700",
          },
        ],
        // Body text
        "body-large": [
          "2rem",
          { lineHeight: "3.2rem", letterSpacing: "0", fontWeight: "400" },
        ],
        body: [
          "1.6rem",
          { lineHeight: "2.4rem", letterSpacing: "0", fontWeight: "400" },
        ],
        "body-small": [
          "1.4rem",
          { lineHeight: "2.4rem", letterSpacing: "0", fontWeight: "400" },
        ],
        "body-xs": [
          "1.2rem",
          { lineHeight: "2.4rem", letterSpacing: "0", fontWeight: "400" },
        ],
        // Caption
        caption: [
          "1.4rem",
          { lineHeight: "1.6rem", letterSpacing: "0", fontWeight: "400" },
        ],
        // Overline
        overline: [
          "1.4rem",
          { lineHeight: "2.4rem", letterSpacing: "0.04em", fontWeight: "700" },
        ],
        "overline-small": [
          "1.2rem",
          { lineHeight: "1.8rem", letterSpacing: "0.04em", fontWeight: "700" },
        ],
        // Link
        link: [
          "1.6rem",
          { lineHeight: "2.4rem", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        "link-small": [
          "1.4rem",
          { lineHeight: "2.4rem", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        "link-xs": [
          "1.2rem",
          { lineHeight: "1.6rem", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        // Button
        "button-large": [
          "1.6rem",
          { lineHeight: "1.5rem", letterSpacing: "0.057em", fontWeight: "500" },
        ],
        button: [
          "1.5rem",
          {
            lineHeight: "1.26rem",
            letterSpacing: "0.096em",
            fontWeight: "500",
          },
        ],
        "button-small": [
          "1.3rem",
          {
            lineHeight: "1.38rem",
            letterSpacing: "0.194em",
            fontWeight: "500",
          },
        ],
      },
      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.015em",
        normal: "0",
        wide: "0.02em",
        wider: "0.04em",
      },
      colors: {
        ...colorThemes,
        primary: {
          DEFAULT: colorThemes.blue[50],
          dark: colorThemes.blue[60],
          strong: {
            DEFAULT: colorThemes.blue[45],
            dark: colorThemes.blue[55],
          },
          heavy: {
            DEFAULT: colorThemes.blue[40],
            dark: colorThemes.blue[50],
          },
        },
        label: {
          normal: {
            DEFAULT: colorThemes.coolNeutral[10],
            dark: colorThemes.coolNeutral[99],
          },
          strong: {
            DEFAULT: colorThemes.common[0],
            dark: colorThemes.common[100],
          },
          neutral: {
            DEFAULT: colorThemes.coolNeutral[20],
            dark: colorThemes.coolNeutral[90],
          },
          alternative: {
            DEFAULT: colorThemes.coolNeutral[60],
            dark: colorThemes.coolNeutral[80],
          },
          assistive: {
            DEFAULT: colorThemes.coolNeutral[70],
            dark: colorThemes.coolNeutral[70],
          },
          disable: {
            DEFAULT: colorThemes.coolNeutral[80],
            dark: colorThemes.coolNeutral[60],
          },
        },
        positive: {
          DEFAULT: colorThemes.green[50],
          dark: colorThemes.green[60],
        },
        cautionary: {
          DEFAULT: colorThemes.orange[50],
          dark: colorThemes.orange[60],
        },
        negative: {
          DEFAULT: colorThemes.red[50],
          dark: colorThemes.red[60],
        },
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        modalSlideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out forwards",
        modalSlideIn: "modalSlideIn 0.3s ease-out forwards",
      },
      spacing: {
        0: "0",
        1: "0.1rem",
        2: "0.2rem",
        3: "0.3rem",
        4: "0.4rem",
        5: "0.5rem",
        6: "0.6rem",
        7: "0.7rem",
        8: "0.8rem",
        9: "0.9rem",
        10: "1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        38: "3.8rem",
        40: "4rem",
        44: "4.4rem",
        48: "4.8rem",
        50: "5rem",
        52: "5.2rem",
      },
      borderRadius: {
        2: "0.2rem",
        4: "0.4rem",
        6: "0.6rem",
        8: "0.8rem",
        base: "1rem",
        12: "1.2rem",
        16: "1.6rem",
        20: "2rem",
      },
      opacity: {
        7: "0.07",
        8: "0.08",
        12: "0.12",
        18: "0.18",
      },
    },
  },
  plugins: [],
} satisfies Config;
