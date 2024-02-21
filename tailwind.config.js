/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      '3xl': '1.875rem',
      //lineHeight: {
      'extra-loose': '2.5',
      12: '3rem',
      // }//
    },
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
    },
  },
  plugins: [],
};
