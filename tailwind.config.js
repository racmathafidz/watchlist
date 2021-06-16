const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['Montserrat', 'sans-serif'],
      'description': ['Open Sans', 'sans-serif']
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      truegray: colors.gray,
      red: colors.red,
    },
    extend: {
      spacing: {
        '108': '29rem',
        '136': '34rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
