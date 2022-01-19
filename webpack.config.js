const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')

const htmlPlugin = new HTML_WEBPACK_PLUGIN({
  template: './public/index.html',
  filename: 'index.html'
})

module.exports = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
}
