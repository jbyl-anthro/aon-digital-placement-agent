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
        "aon-navy": "#262836",
        "aon-red": "#eb0017",
        "aon-teal": "#007585",
        "aon-teal-light": "#29b0c3",
        "aon-gray-01": "#46535e",
        "aon-gray-02": "#5f6b74",
        "aon-gray-03": "#78838b",
        "aon-gray-04": "#919a9f",
        "aon-gray-05": "#cddbde",
        "aon-gray-06": "#dde8ea",
        "aon-gray-07": "#eef6f7",
        "aon-gray-08": "#f9fcfc",
        "aon-success": "#12a88a",
        "aon-orange": "#f25d00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ['"Helvetica Now Display"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
        sans: ['"Helvetica Now Text"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
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
        flow: {
          "0%": { strokeDashoffset: "20" },
          "100%": { strokeDashoffset: "0" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 2px rgba(38,40,54,0.2))" },
          "50%": { filter: "drop-shadow(0 0 8px rgba(38,40,54,0.5))" },
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
