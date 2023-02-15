/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0067f3",
        secondary: "#fce40b",
      },
    },
  },
  plugins: [],
};
