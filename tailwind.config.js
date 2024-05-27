/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#d7d0ff",
        primary: "#5f48e6",
        darkCharcoal: "#151921",
        secondary: "#c7f4c2",
      },
    },
  },
  plugins: [],
};

