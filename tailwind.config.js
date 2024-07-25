/** @type {import('tailwindcss').Config} */
module.exports = {
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
    extend: {
      colors: {
        ozp: {
          primary: "#283618",
          secondary: "#7E7E7E",
          tertiary: "#222222",
          background: "#0E0E0E",
          grey: "#7E7E7E",
          purple: "#C79BFF",
        },
      },
      fontFamily: {
        ozpPrimary: ["Krona One", "sans-serif"],
        ozpSecondary: ["var(--font-secondary)"],
        ozpTertiary: ["var(--font-tertiary)"],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'inner-lg': 'inset 0 8px 8px rgba(0, 0, 0, 0.2), inset 0 -5px 2px rgba(234, 234, 234, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
