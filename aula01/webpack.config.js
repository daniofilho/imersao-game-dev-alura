const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ({
  mode: process.env.NODE_ENV,
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // opens Browser when load
  devServer: {
    open: true,
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
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    /*alias: {
      '~': path.resolve('./src'),
    },*/
  },
});
