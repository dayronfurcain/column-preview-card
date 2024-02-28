/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
        'big-shoulders-display': ['"Big Shoulders Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
