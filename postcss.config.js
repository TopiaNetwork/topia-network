module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      replace: true,
      propList: ['*'],
    },
  },
}
