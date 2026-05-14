/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ts: {
          50:  "#F4FDE8",
          100: "#DFF8BE",
          200: "#CBF495",
          300: "#B6EF6B",
          400: "#A2EB42",
          500: "#8DE718",
          600: "#6AAD12",
          700: "#5A9410",
          800: "#416A0B",
          900: "#284107",
          950: "#0E1702",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}