const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                './src/assets/styles/main.scss',
              ]
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'src/index.html',
      filename: 'index.html',
      minify: { collapseWhitespace: true },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new ESLintPlugin({
      exclude: 'node_modules',
    }),
  ],
};
