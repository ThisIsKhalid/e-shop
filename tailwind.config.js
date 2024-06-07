/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd7373",
        // secondary: "#ffda55",
        secondary: "#FFD670",
        tertiary: "#e5ff7f",
      },
    },
  },
  plugins: [],
};
