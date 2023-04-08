/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '400px',
      lt: '856px',
      md: '1000px',
      mdl: '1200px',
      mxl: '1800px',
    },
  },
  plugins: [],
}
