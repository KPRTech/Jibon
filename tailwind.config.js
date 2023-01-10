/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
      },
      maxWidth: {
        container: "1170px",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        play: ["Playfair Display", "serif"],
        rale: ["Raleway", "sans-serif"],
        time: ["Times New Roman", " Times", "serif"],
      },
      textColor: {
        primary: "#FF6400",
        hoverPrimary: "#b74900",
        secondary: "#333333",
      },
      backgroundColor: {
        primary: "#FF6400",
        hoverPrimary: "#b74900",
        secondary: "#333333",
      },
      keyframes: {
        popUpY: {
          "0%": { opacity: "0", transform: "translateY(10%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        popDownY: {
          "0%": { opacity: "0", transform: "translateY(-25%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        popDownTwo: {
          "0%": { opacity: "0", transform: "translateY(-10%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideX: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideRevX: {
          "0%": { opacity: "1", transform: "translateX(0%)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        slideY: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideYTwo: {
          "0%": { opacity: "0", transform: "translateY(70%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        noAnim: {
          "0%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
