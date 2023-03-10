const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#0C8CE9",
      "dark-primary": "#4967B5",
      "text-dark": "#EEEEEE",
      "text-light": "#202020",
      "main-text-color-dark": '#A7D6E1',
      "main-text-color-light": "#054782",
      "bg-dark": "#202020",
      "dark-line": "#333333",
      "light-line": "#DDDDDD",
      placeHolder: "9A9EA5",
      white: "#FFFFFF",
      danger: "#E31A1A",
      success: "#27AE60",
      warning: "#DEAD00",
      info: "#2F80ED",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
      mono: ["Inter", "monospace"],
      cairo: ["Cairo", "sans-serif"],
    },
    extend: {
      boxShadow: {
        dark: "0 2px 4px #222222",
        light: "0 2px 4px #DDDDDD",
        inner:
          "inset 5px 5px 10px -1px rgba(10, 99, 169, 0.16), inset -5px -5px 10px -1px rgba(255, 255, 255, 0.7)",
      },
    },
  },
};
