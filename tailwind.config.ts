import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
export default config;
