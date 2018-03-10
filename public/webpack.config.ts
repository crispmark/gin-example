import * as CopyWebpackPlugin from 'copy-webpack-plugin';
// @ts-ignore: Cannot find module 'path'.
import * as path from 'path';

export default {
  // @ts-ignore: Cannot find name '__dirname'.
  entry: path.join(__dirname, './ts/app.ts'),
  module: {
    rules: [
      {
        loader: 'vue-loader',
        test: /\.vue$/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        test: /\.ts?$/,
      },
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: '../fonts',
        },
        test: /\.(ttf|woff)$/,
      },
    ],
  },
  output: {
    filename: 'app.js',
    // @ts-ignore: Cannot find name '__dirname'.
    path: path.join(__dirname, '../dist/js'),
  },
  plugins: [
    new CopyWebpackPlugin([{
      // @ts-ignore: Cannot find name '__dirname'.
      from: path.join(__dirname, './static/*'),
      // @ts-ignore: Cannot find name '__dirname'.
      to: path.join(__dirname, '../dist/[name].[ext]'),
    }]),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
};
