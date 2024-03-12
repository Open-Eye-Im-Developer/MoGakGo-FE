import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
    fontFamily: {
      sans: '"Galmuri9", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
    extend: {
      colors: {
        primary: "#09224E",
        secondary: "#FFCB09",
        error: "#DC143C",
        success: "#17C964",
        NeoRed: "#e24a57",
        NeoYellow: "#fba834",
        NeoBlue: "#396eeb",
        NeoGreen: "#25b195",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "map-bounce": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-1.5%)",
          },
        },
        "signup-fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "signup-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "map-bounce": "map-bounce 1.2s linear infinite alternate",
        "signup-fade-out": "signup-fade-out 0.5s ease-out",
        "signup-fade-in": "signup-fade-in 0.5s ease-out",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #000000",
        "neo-b": "0px 4px 0px 0px #000000",
        "neo-l": "-4px 0px 0px 0px #000000",
        "neo-t": "0px -4px 0px 0px #000000",
        "neo-r": "4px 0px 0px 0px #000000",
        "neo-thin": "2px 2px 0px 0px #000000",
        "neo-thin-b": "0px 2px 0px 0px #000000",
        "neo-thin-l": "-2px 0px 0px 0px #000000",
        "neo-thin-t": "0px -2px 0px 0px #000000",
        "neo-thin-r": "2px 0px 0px 0px #000000",
        "neo-white": "4px 4px 0px 0px #ffffff",
        "neo-white-thin": "2px 2px 0px 0px #ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
