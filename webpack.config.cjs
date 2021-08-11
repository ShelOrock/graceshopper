const { resolve } = require('path');

module.exports = {
  entry: ['@babel/polyfill', './app/main.js'],
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
        resolve: {
          fullySpecified: false
        },
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img'
        },
      },
    ],
  },
};