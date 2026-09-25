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
        paper: "#f7f5f0",
        ink: "#0e1626",
        muted: "#525c70",
        navy: "#142544",
        brand: "#142544",
        cta: "#b3202a",
        steel: "#dfe4ec",
        // Exact tokens mapped
        "barber-paper": "#f7f5f0",
        "barber-ink": "#0e1626",
        "barber-muted": "#525c70",
        "barber-navy": "#142544",
        "barber-red": "#b3202a",
        "barber-steel": "#dfe4ec",
      },
      fontFamily: {
        heading: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
