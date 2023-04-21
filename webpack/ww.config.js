const WWPlugin = require('./ww_plugin.js');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

global.port = '8080';

module.exports = (env, options) => ({
  entry: './src/helpers/script_ww.js',
  module: {
    rules: [
      {
        test: /script_ww\.js$/,
        loader: 'worker-loader',
      },
    ],
  },
  plugins: [
    new WWPlugin(),
    new webpack.DefinePlugin({
      MOB_DEBUG: JSON.stringify(process.env.MOB_DEBUG),
    }),
  ],
  optimization: {
    minimize: options.mode === 'production',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: {
            reserved: ['_id', '_tf'], // for scripts std
          },
        },
      }),
    ],
  },
});
