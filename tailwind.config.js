/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'blue': '#008cf0',
        'dark-blue': '#006ebd',
        'light-blue': '#00bfff'
      },
      fontFamily: {
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}
