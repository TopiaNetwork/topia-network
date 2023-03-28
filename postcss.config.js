module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // postcss-pxtorem: {
    //   rootValue: 1080 / 10,
    //   replace: true,
    // },
    'postcss-pxtorem': {
      rootValue: 10,
      replace: true,
      propList: ['*'],
    },
  },
}
