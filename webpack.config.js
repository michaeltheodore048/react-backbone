const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/main.jsx',
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8001/',
    'webpack/hot/dev-server',
  ],

  output: {
    publicPath: 'http://localhost:8001/build/',
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: `${__dirname}/assets/index.template.html`,
      filename: 'index.html',
    }),
  ],

  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8001,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
