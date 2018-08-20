const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-application.js',
    publicPath: '/dist/',
    library: "presentation-application",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'next-core-application': {
      commonjs: 'next-core-application',
      commonjs2: 'next-core-application',
      amd: 'next-core-application',
      root: 'next-core-application'
    },
    'next-core-structures': {
      commonjs: 'next-core-structures',
      commonjs2: 'next-core-structures',
      amd: 'next-core-structures',
      root: 'next-core-structures'
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
