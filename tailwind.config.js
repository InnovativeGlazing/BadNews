/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bad-red': '#b42e26',
        'bear-blue': '#051B29',
      },
      fontFamily: {
        'scoville': ['Scoville', 'sans-serif'],
        'alinsa': ['Alinsa', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}