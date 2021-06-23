const { resolve } = require('path');

module.exports = {
  entry: ['@babel/polyfill', './app/main.jsx'],
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, './app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png | svg | jpg | gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};