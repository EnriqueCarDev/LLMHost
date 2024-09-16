/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#003057",
        secondary: "#f5f5f4",
        "on-secondary": "#ececec",
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
