const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ({
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Imersão Game Dev - Alura',
      template: 'src/index.html',
    }),
  ],
  // This makes root import possible
  resolve: {
    //modules: [path.resolve('./src'), path.resolve('./node_modules')],

    alias: {
      '~': path.resolve('./src'),
    },
  },
});
