import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noshBlack: "#111112",
        noshGreen: "#29C302",
        noshYellow: "#FFBF00",
        noshPink: "#E83F6F",
        noshLightPink: "#FF9DB9",
        bg: "#F7FFF5",
        grey: "#B9B9B9",
      },
      backgroundColor: {
        "custom-green": "rgba(41, 195, 2, 0.10)",
        "custom-yellow": "rgba(255, 191, 0, 0.10)",
        "custom-pink": "rgba(232, 63, 111, 0.10)",
      },
      width: {
        fullscreen: "1920px",
      },
      fontFamily: {
        Poppins: "Poppins",
        Rafgins: ["Rafgins", "sans-serif"],
      },
      animation: {
        "move-text": "move 60s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      screens: {
        xs: "1025px",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar")(
      { preferredStrategy: "pseudoelements" },
      { nocompatible: true }
    ),
  ],
};
export default config;
