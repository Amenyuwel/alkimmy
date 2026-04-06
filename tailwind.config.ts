import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "var(--text)",
        background: "var(--bg)",
        backgroundImage: "var(--background-image)",
        accent: "var(--accent)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--sans)", "sans-serif"],
        heading: ["var(--heading)", "serif"],
        mono: ["var(--mono)", "monospace"],
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