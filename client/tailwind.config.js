/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
    },
  },
  },  
  plugins: [],
}
