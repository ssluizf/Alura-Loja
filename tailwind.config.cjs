/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: {
        25: "#F5F5F5",
        200: "#C8C8C8",
        400: "#A2A2A2",
        DEFAULT: "#464646"
      },
      blue: {
        50: "#EAF2FD",
        100: "#D4E4FA",
        700: "#5595E9",
        DEFAULT: "#2A7AE4",
      },
    },
    screens: {
      xs: "0",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      padding: {
        18: "70px",
      },
      backgroundImage: {
        "banner-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
      }
    },
  },
  plugins: [],
};
