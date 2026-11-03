import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#05070c",
          surface: "#0b0f19",
          elevated: "#111827",
          subtle: "#161f30",
          card: "#0d1322",
          cardHover: "#131b2e",
          turquoise: "#00f5c4",
          cyan: "#06b6d4",
          lime: "#b4ff39",
        },
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

