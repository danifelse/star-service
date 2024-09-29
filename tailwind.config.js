/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#F97316",
        dark: "#15181d",
        darkgray: "#090909",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};