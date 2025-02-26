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
        "z-low-blue": "#E7ECFF",
        "z-yellow": "#EB8A2A",
        "z-deep-yellow": "#BA6612",
        "z-low-yellow": "#FFEDDC",
        "z-content": "#3D3D3D",
        "z-poor-content": "#AFAFAF",
        "z-border": "#EEEEEE",
        "z-deep-border": "#DFDEDE",
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
    require("@tailwindcss/typography"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".txt-regular": {
          "@apply text-z-content text-justify leading-loose": {},
        },
        ".btn-z-bg-gray": {
          "@apply px-5 py-2 text-z-content rounded-lg bg-z-border font-bold hover:bg-z-deep-border":
            {},
        },
        ".btn-z-blue": {
          "@apply px-5 py-2 text-white rounded-lg bg-z-blue font-bold hover:bg-z-deep-blue":
            {},
        },
        ".btn-z-yellow": {
          "@apply px-5 py-2 text-white rounded-lg bg-z-yellow font-bold hover:bg-z-deep-yellow":
            {},
        },
        ".btn-z-outline-blue": {
          "@apply px-5 py-2 text-white rounded-lg bg-white border-2 border-z-blue text-z-blue font-bold  hover:bg-z-low-blue":
            {},
        },
        ".btn-z-outline-yellow": {
          "@apply px-5 py-2 text-white rounded-lg bg-white border-2 border-z-yellow text-z-yellow font-bold  hover:bg-z-low-yellow":
            {},
        },
        ".link-content": {
          "@apply text-z-blue font-semibold underline underline-offset-2 decoration-2 decoration-[#C0CCFF]":
            {},
        },
        ".link-nav": {
          "@apply font-semibold underline underline-offset-8 decoration-z-content decoration-2":
            {},
        },
        ".link-sm": {
          "@apply underline underline-offset-2 decoration-z-blue decoration-2":
            {},
        },
      });
    }),
  ],
};
export default config;
