const path = require('path');
const {
  AureliaPlugin,
  ModuleDependenciesPlugin
} = require('aurelia-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: 'aurelia-bootstrapper',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'].map(x => path.resolve(x))
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader'
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|gif|jpg|ico)$/i,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'url-loader?limit=100000'
      },
      // Expose breeze globaly.  This is needed to work with aurelia-breeze
      // https://github.com/webpack-contrib/expose-loader
      {
        test: require.resolve('breeze-client'),
        use: [
          {
            loader: 'expose-loader',
            options: 'breeze'
          }
        ]
      }
    ]
  },

  plugins: [
    new AureliaPlugin({ includeAll: 'src' }),
    new ModuleDependenciesPlugin({
      'aurelia-dialog': [
        './ai-dialog',
        './ai-dialog-header',
        './ai-dialog-body',
        './ai-dialog-footer',
        './attach-focus'
      ]
    }),
    new CopyPlugin([
      {
        from: 'index.html'
      },
      {
        from: 'webpack.config.js'
      },
      {
        from: 'plugins/log4javascript',
        to: 'plugins/log4javascript'
      }
    ]),
    // https://www.npmjs.com/package/webpack-utf8-bom
    // http://stackoverflow.com/questions/43130088/uncaught-syntaxerror-invalid-or-unexpected-token-%C3%AF
    new BomPlugin(true),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Promise: 'bluebird'
    })
  ]
};
