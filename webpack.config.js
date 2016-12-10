const webpack = require('webpack');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./frontend/App.jsx"],
  output: {
    path: __dirname + "/frontend/assets/bundle",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  // plugins: [
  //   new LiveReloadPlugin()
  // ]
};