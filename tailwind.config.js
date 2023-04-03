/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '400px',
      lt: '700px',
      md: '1000px',
      mxl: '1800px',
    },
  },
  plugins: [],
}
