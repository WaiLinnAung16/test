/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          og: "#0067F3", // original primary
          50: "#CDE8FF", // bg-primary
          100: "#B3D1FF",
          500: "#437DFF",
          700: "#0056DE",
          800: "#0044C7",
        },
        secondary: {
          og: "#FFEA45", // original secondary
          25: "#FFFCE5",
          50: "#FFF9CC",
          75: "#FFF7B3",
          100: "#FFF499",
          125: "#FFF180",
          150: "#FFEE66",
        },
        gray: {
          og: "#171717", // original neutral
          300: "#B0B0B0",
          400: "#9B9B9B",
          500: "#868686",
          600: "#727272",
          700: "#5E5E5E",
          800: "#4B4B4B",
          900: "#393939",
        },
        success: "#1FEF40",
        warning: "#F1C21D",
        danger: "#CF0505",
        accent: "#F1F7FF",
      },
    },
  },
  plugins: [],
};

