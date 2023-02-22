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
      primary: "#4967B5",
      "light-primary": "#7091E7",
      light: "#FDFFFF",
      dark: "#222222",
      secondary: "rgba(26, 59, 144, 0.2)",
      title: "#4D5F79",
      danger: "#EB5757",
      success: "#27AE60",
      warning: "#E2B93B",
      info: "#2F80ED",
      "custom-gray": "#EBEEF1",
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
