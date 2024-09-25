/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#232323",
        secondaryVariant: "#1c1c1c",
        accent: "#ff7400",
      },
      fontFamily: {
        header: ["Orbitron", "sans-serif"],
        headerVariant: ["Audiowide", "sans-serif"],
        body: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
