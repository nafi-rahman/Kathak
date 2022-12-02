/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
  require('tw-elements/dist/plugin'),
  // require('@tailwindcss/forms')
],
}