const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: './src/pages/main/main.js',
    game: './src/pages/game/game.js',
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
      template: './src/pages/main/main.html',
      chunks: ['main'],
      filename: './index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/pages/game/game.html',
      chunks: ['game'],
      filename: './game.html',
    }),
  ]
}
