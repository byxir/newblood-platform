/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#151515",
        sidebarBg: "#0E0E0E",
        redAccent: "#BA2323",
        subline: "#9F9F9F",
        subtext: "#7D7D7D",
        focusElement: "#D3D3D3",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
