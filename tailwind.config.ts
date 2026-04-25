import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "aon-navy": "#002B49",
        "aon-red": "#E30613",
        "aon-bg": "#F7F8FA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "flow": {
          "0%": { strokeDashoffset: "20" },
          "100%": { strokeDashoffset: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 2px rgba(0,43,73,0.2))" },
          "50%": { filter: "drop-shadow(0 0 8px rgba(0,43,73,0.5))" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 2s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
        flow: "flow 1s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
