/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F44BB6', // Pink
        secondary: '#447CF9', // Blue
        secondaryDark: '#1C3177', // eg, Edit Loan Structure title
        secondaryLight: '#447cf9', // eg, Dropdown select
        error: '#fff8e0',
        errorDark: '#FFBA00',
        success: '#27DA4C',
        grey: '#BDBDBD',
        lightGrey: '#D3D3D3',
        textPrimary: '#4E4E4E',
      },
      // screens: {
      //   lg: '1190px',
      // },
      boxShadow: {
        '3xl': '0 4px 4px rgb(0 0 0 / 25%)',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border|ring)-(red|blue|gray)-[0-9]{3}/,
      variants: ['responsive', 'hover', 'focus', 'active', 'dark'],
    },
  ],
  plugins: [],
};
