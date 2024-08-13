/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ejs,css}", "./src/**/**/*.{html,ejs,css}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
      },
    },
  },

  plugins: [],
};
