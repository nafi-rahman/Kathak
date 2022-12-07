/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        Source: ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
  require('tw-elements/dist/plugin'),
  // require('@tailwindcss/forms')
],
}