const path = require('path')
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = `${process.cwd()}/dist/`
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, './src/scss/*.scss'),
      ]
    }
  }
}
