const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "none",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-color-emoji)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        base: "0.9rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("dark", ["@media not print { .dark & }"]);
    }),
  ],
};
