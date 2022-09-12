/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "main": "#CBCBCB",
      "text": "#FDFDFD",
      "focus": "#C8C7C7"
    },
    extend: {
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}