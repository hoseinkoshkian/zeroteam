import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
// import { mobilePadding } from "styles.config";
const mobilePadding = "1rem";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "z-blue": "#2A4EEB",
        "z-deep-blue": "#0F2A9F",
        "z-deep-yellow": "#BA6612",
        "z-yellow": "#EB8A2A",
        "z-content": "#3D3D3D",
        "z-border": "#EEEEEE",
      },
      spacing: {
        sm: mobilePadding,
      },
    },
    screens: {
      sm: "620px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: mobilePadding, // also for "sm" size
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "500",
      bold: "600",
      semibold: "800",
      extrabold: "900",
      mostbold: "950",
      heavy: "1000",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".btn-z-blue": {
          "@apply px-5 py-2 text-white rounded-xl bg-z-blue font-bold hover:bg-z-deep-blue":
            {},
        },
        ".btn-z-yellow": {
          "@apply px-5 py-2 text-white rounded-xl bg-z-yellow font-bold hover:bg-z-deep-yellow":
            {},
        },
        ".btn-z-outline-blue": {
          "@apply px-5 py-2 text-white rounded-xl bg-white border-2 border-z-blue text-z-blue font-bold":
            {},
        },
        ".btn-z-outline-yellow": {
          "@apply px-5 py-2 text-white rounded-xl bg-white border-2 border-z-yellow text-z-yellow font-bold":
            {},
        },
      });
    }),
  ],
};
export default config;
