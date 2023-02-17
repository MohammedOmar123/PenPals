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
      dark:"#222222",
      secondary: "rgba(26, 59, 144, 0.2)",
      danger: "#EB5757",
      success: "#27AE60",
      warning: "#E2B93B",
      info: "#2F80ED",
      
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
      mono: ["Inter", "monospace"],
      cairo:["Cairo","sans-serif"]

    },
    extend: {
      boxShadow: {
        "drop": "0px 10px 50px rgba(144, 164, 195, 0.5)",
        "inner": "inset 0px 10px 50px rgba(144, 164, 195, 0.5)",
      },
  
    },
  },
  plugins: [],
};
