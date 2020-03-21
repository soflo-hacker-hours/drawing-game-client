const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: './src/index.js',
    game: './src/game.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/game.html',
      chunks: ['game'],
      filename: './game.html',
    }),
  ]
}
