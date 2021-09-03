const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.s?[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ],
    }]
  }
};
