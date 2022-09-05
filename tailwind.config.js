const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  corePlugins: {
    container: false, // instead, we are using max-w-2xl
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        shine: "shine 20s infinite linear",
      },
      keyframes: {
        shine: {
          "0%": {
            filter: "hue-rotate(0deg)",
          },
          "100%": {
            filter: "hue-rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
