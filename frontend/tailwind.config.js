/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "wix-regular": ["Wix-Regular", "sans-serif"],
        "wix-semibold": ["Wix-Semibold", "sans-serif"],
        "gogesty": ["Gogesty", "serif"],
        "garamond": ["Cormorant Garamond", "serif"],
        "rethink": ["Rethink-Sans", "sans-serif"],
        "playfair-display": ['Playfair Display', "serif"],
        "kalina": ['Kalnia', "serif"]
      },
    },
    screens: {
      phone: "360px",
      xs: "480px",
      sm: "768px",
      tablet: "914px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
