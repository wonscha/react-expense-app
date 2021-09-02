const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      use: ['babel-loader'],
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
  },
};
