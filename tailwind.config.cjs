/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        mon: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "8xl": "1536px",
      },
    },
  },
  plugins: [],
};
