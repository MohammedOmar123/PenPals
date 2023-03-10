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
      "light-primary": "#3699FF",
      light: "#EEEEEE",
      dark: "#202020",
      darker: '#121212',
      darkest: "#000000",
      secondary: "rgba(26, 59, 144, 0.2)",
      title: "#4D5F79",
      danger: "#FF3B30",
      success: "#27AE60",
      warning: "#FFCC00",
      info: "#2F80ED",
      "custom-gray": "#5D5D5D",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
      mono: ["Inter", "monospace"],
      cairo: ["Cairo", "sans-serif"],
    },
    extend: {
      boxShadow: {
        drop: "10px 10px 10px -1px rgba(10, 99, 169, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.7);",
        inner:
          "inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16), inset -10px -10px 10px -1px rgba(255, 255, 255, 0.7)",
      },
    },
  },
};
