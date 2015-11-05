const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, '.bundled', 'build');
const mainPath = path.resolve(__dirname, 'app', 'main.js');
const devBuild = process.env.NODE_ENV !== 'production';

var config = {
  entry: [
    './app/styles/main.css',
    './app/css/bootstrap.css',
    './app/css/animate.css',
    './app/css/style.css',
    mainPath
  ],
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: 'http://lukasmac.github.io/gptest/build/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?optional=es7.decorators', exclude: [nodeModulesPath] },
      { test: /\.css$/, loader: "style-loader!css-loader?prefix=aaa/" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
};

if (devBuild) {
  config.devtool = 'eval-source-map';
  config.entry.push('webpack/hot/dev-server');
  config.entry.push('webpack-dev-server/client?http://localhost:8080');
  config.plugins = [new Webpack.HotModuleReplacementPlugin()];
}

module.exports = config;
