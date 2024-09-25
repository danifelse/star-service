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
        primary: "#0369a1",
        dark: "#15181d",
        darkgray: "#090909",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};