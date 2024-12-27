import type { Config } from "tailwindcss";

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
      },
      letterSpacing: {
        tightest: "-0.02em",
        tighter: "-0.015em",
        normal: "0",
        wide: "0.02em",
        wider: "0.04em",
      },
      colors: {
        primary: {
          DEFAULT: "#7749F8",
          dark: "#5227CC",
          light: "#EBE5FC",
        },
        secondary: {
          DEFAULT: "#007DFF",
          dark: "#54595E",
          light: "#ABB5BE",
        },
        success: {
          DEFAULT: "#05CE91",
          50: "#E1F9F2",
          100: "#CDF5E9",
          200: "#9BEBD3",
          300: "#69E2BD",
          400: "#37D8A7",
          500: "#05CE91",
          600: "#04A574",
          700: "#037C57",
          800: "#02523A",
          900: "#01291D",
        },
        info: {
          DEFAULT: "#1EA5FC",
          50: "#E4F4FF",
          100: "#D2ECFE",
          200: "#A5DBFE",
          300: "#78C8FD",
          400: "#4BB7FD",
          500: "#1EA5FC",
          600: "#1884CA",
          700: "#126297",
          800: "#0C4265",
          900: "#062032",
        },
        error: {
          DEFAULT: "#FF6161",
          50: "#FFECEC",
          100: "#FFDFDF",
          200: "#FFC0C0",
          300: "#FFA0A0",
          400: "#FF8181",
          500: "#FF6161",
          600: "#CC4E4E",
          700: "#993A3A",
          800: "#662727",
          900: "#331313",
        },
        warning: {
          DEFAULT: "#FFAD49",
          50: "#FFF5E9",
          100: "#FFEFDB",
          200: "#FFDEB6",
          300: "#FFCE92",
          400: "#FFBD6D",
          500: "#FFAD49",
          600: "#CC8A3A",
          700: "#99682C",
          800: "#66451D",
          900: "#33230F",
        },
        purple: {
          DEFAULT: "#B66DFF",
          50: "#F6EDFF",
          100: "#F0E2FF",
          200: "#E2C5FF",
          300: "#D3A7FF",
          400: "#C58AFF",
          500: "#B66DFF",
          600: "#9257CC",
          700: "#6D4199",
          800: "#492C66",
          900: "#241633",
        },
        gray: {
          DEFAULT: "#61697F",
          50: "#EBEEF5",
          100: "#C3C8D4",
          200: "#A8AEBF",
          300: "#8E95A9",
          400: "#767E94",
          500: "#61697F",
          600: "#475069",
          700: "#323B54",
          800: "#20283E",
          900: "#121829",
        },
        black: {
          DEFAULT: "#000000",
          100: "rgba(0, 0, 0, 0.1)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(0, 0, 0, 0.3)",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(0, 0, 0, 0.5)",
          650: "rgba(0, 0, 0, 0.65)",
          750: "rgba(0, 0, 0, 0.75)",
          900: "#000000",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          650: "rgba(255, 255, 255, 0.65)",
          750: "rgba(255, 255, 255, 0.75)",
          900: "#FFFFFF",
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
        4: "0.4rem",
        8: "0.8rem",
        12: "1.2rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        28: "2.8rem",
        32: "3.2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
