import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "var(--text)",
        background: "var(--bg)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
      lineHeight: {
        relaxed: "1.45",
      },
      letterSpacing: {
        wide: "0.18px",
      },
    },
  },
  plugins: [],
};

export default config;