/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      '3xl': '1.875rem',
    },
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
    },
  },
  plugins: [],
};
