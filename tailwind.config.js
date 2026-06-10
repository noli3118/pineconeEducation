/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        pine:  { DEFAULT: '#2d4a3e', light: '#3d6355', dark: '#1e3329' },
        cone:  { DEFAULT: '#c4732a', light: '#e8955a' },
        cream: '#faf6ee',
        mist:  '#eae4d8',
        bark:  '#7a6551',
      },
      fontFamily: {
        heading: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body:    ['"Comic Neue"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
