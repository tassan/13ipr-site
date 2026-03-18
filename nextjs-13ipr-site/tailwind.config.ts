import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        surface: "#F0EFE9",
        navy: {
          DEFAULT: "#1B2A4A",
          dark: "#111c30",
          light: "#2d4270",
        },
        gold: {
          DEFAULT: "#C9913A",
          light: "#e0b06a",
          dark: "#a57228",
        },
        stone: "#E8E5DE",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
