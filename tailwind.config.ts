import type { Config } from "tailwindcss";
// import type theme
const config: Config = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        // DEFAULT: "2rem",
        sm: "2rem",
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
    extend: {
      colors: {
        "z-blue": "#2A4EEB",
        "z-yellow": "#EB8A2A",
        "z-content": "#3D3D3D",
        "z-border": "#EEEEEE",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
