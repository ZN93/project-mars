/* eslint-env es6 */
const colors = require('tailwindcss/colors');

console.log(colors.white);

module.exports = {
  content: ['./src/**/*.{html,ts,css,scss}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
