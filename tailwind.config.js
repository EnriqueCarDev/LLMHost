/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#003057",
        secondary: "#f4eed7fa",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
        display: ["Roboto"],
      },
    },
  },
  plugins: [],
};
