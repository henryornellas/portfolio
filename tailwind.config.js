
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "black",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "black",
        "primary-100": "white",
        "primary-300": "#FFA6A3",
        "primary-500": "red",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#f3f3f3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};